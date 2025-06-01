const guessForm = document.querySelector("#guess-form")
const guessInput = document.querySelector<HTMLInputElement>("#guess-input")
const guessBtn = document.querySelector<HTMLButtonElement>("#guess-btn")
const statusBar = document.querySelector(".status-bar")
const trialCount = document.querySelector("#trial-count")
const restBtn = document.querySelector<HTMLButtonElement>("#reset-btn")
const resultMsg = document.querySelector("#result-msg")
const historyList = document.querySelector("#history-list")

// ==============================================================================

interface Target {
    readonly target : number
}

interface Attempt {
    input : number
    upAndDown? : "업" | "다운" | "정답"
}

interface Try {
    attempt : Attempt[]
}
// ==============================================================================


let currentTarget : Target  = {
    target: 0
}

let allTry : Try = {
    attempt : []
}

// ==============================================================================

// 시작부


// 타겟 생성
currentTarget = makeTarget()

// 타겟 생성
function makeTarget() :Target {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    return { target: randomNum };
}

// ==============================================================================

// 실제 버튼을 눌러서 게임 시작

// 버튼 누르면
guessForm?.addEventListener("submit", (e) => {
    e.preventDefault()

let currentAttempt : Attempt | Error;

     currentAttempt = makeAttempt()
     if (currentAttempt instanceof Error) return

    judgeAndAddTryList(currentAttempt)
    endGame(currentAttempt)
})

// 판별별
function judgeAndAddTryList(attempt : Attempt) : void {
    addAttemptToHistoryList(addAttemptToTryList(judgeTheAttempt(attempt)))
        trialCounter()

}


// attempt 생성
function makeAttempt() : Attempt | Error{
    
    if (!guessInput) {
        return new Error("값이 들어오지 않았습니다.")}
    
    else{
        const input = Number(guessInput?.value)
        if (isNaN(input) || input < 1 || input > 100) {
        return new Error("1~100 사이의 숫자를 입력해야 합니다.");
    }
    resetInput()
    return {input : input}
    }
    
}

// 시도 1 늘어남
function trialCounter() :void {
    trialCount!.innerHTML = `시도: ${allTry.attempt.length}회`
}

// 정답이 맞는지 확인 함
function judgeTheAttempt(attempt : Attempt) :Attempt {
    // 업일 때때
    if(attempt.input > currentTarget.target) {
        attempt.upAndDown = "다운"
        return attempt
    }
    // 다운일 때때
    else if(attempt.input < currentTarget.target) {
        attempt.upAndDown = "업"
        return attempt
    }
    // 맞았을 때때
    else {
        attempt.upAndDown = "정답"
        return attempt
    }
}

// 리스트로 시도가 들어감
function addAttemptToTryList(attempt:Attempt) : Attempt{
    
    allTry.attempt.push(attempt)
return attempt
    
}

// Attempt가 history list로 들어감
function addAttemptToHistoryList(attempt : Attempt) : void {

    const li = document.createElement("li")
    li.textContent = `입력한 수 : ${attempt.input}, 결과:${attempt.upAndDown}`
    historyList!.appendChild(li);
}


// Attempt가 정답이면 게임을 끝내버림
function endGame (attempt : Attempt) : void {
    if (attempt.upAndDown === "정답") {
        showResultMsg()
disableGuessBtn()
ableRestBtn()
    }

}

// resultMsg를 맞췄습니다! 로 바꿈
function showResultMsg() : void {
    resultMsg!.innerHTML = `🎉 정답입니다! 🎉`
}


// 확인버튼을 비활성화
function disableGuessBtn() : void {
    if (guessBtn) {
    guessBtn.disabled = true;
  }
}

// 다시하기 버튼을 활성화
function ableRestBtn() : void {
    restBtn!.style.display = "inline-block"
}

// ==============================================================================

// 다시하기기
restBtn?.addEventListener("click", () => {
    allReset()
})

// 다시하기 버튼을 누르면 모두 초기화
function allReset() : void {
    restObj(currentTarget)
    restObj(allTry)
    restHtml()
}

function restObj<T extends object>(a: T) : void {
    // 현재 타겟 리셋셋
    if("target" in a) {
        currentTarget = makeTarget()
        return
    }
    // 현재 기록 리셋
    if("attempt" in a) {
        allTry.attempt = []
        return
    }
}

function resetInput() : void {
    if (guessInput) {
    guessInput.value = "";
  }

}

function restHtml(): void {
  resetInput()

  if (trialCount) {
    trialCount.innerHTML = "시도: 0회";
  }

  if (historyList) {
    historyList.innerHTML = "";
  }

  if (statusBar) {
    statusBar.textContent = "";
  }

  if (resultMsg) {
    resultMsg.innerHTML = "";
  }

  if (guessBtn) {
    guessBtn.disabled = false;
  }

  if (restBtn) {
    restBtn.style.display = "none";
    restBtn.disabled = true;
  }
}