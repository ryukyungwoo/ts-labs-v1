# TypeScript Todo List 기능 요구 명세

---

## 프로젝트 개요

이 프로젝트는 **TypeScript**를 활용해 만드는 미니멀 모던 스타일의 Todo List 앱입니다.  
코드를 통해 TypeScript의 주요 개념(타입, 타입 단언, DOM 타입, 이벤트 등)을 실전에서 익힐 수 있습니다.

---

## 주요 기능 명세

### 1. 오늘 날짜 표시

- 상단에 **오늘 날짜**가 `YYYY. MM. DD (요일)` 형태로 항상 표시됩니다.

### 2. 할 일 추가

- 할 일 추가는 상단의 **인라인 입력 폼**에서 입력 후  
  **+ 버튼(둥근 버튼)** 클릭 또는 **Enter**로 즉시 추가됩니다.
- 빈 값/공백 입력 시 추가되지 않습니다.
- 별도의 모달/팝업 없이 한 줄 입력창에서 바로 추가합니다.

### 3. 할 일 목록 표시

- 할 일 리스트가 화면에 렌더링됩니다.
- 각 항목은 **체크박스**와 **텍스트(내용)**로 구성됩니다.

### 4. 할 일 완료/취소 토글

- 체크박스 클릭으로 해당 할 일의 **완료/미완료** 상태를 즉시 토글합니다.
- 완료된 할 일은 **취소선과 연회색**으로 시각적으로 구분됩니다.

### 5. 할 일 삭제

- 각 할 일 우측에는 **삭제 아이콘(x)**이 있습니다.
- 이 아이콘은 **마우스 오버 시에만 표시**됩니다.
- 클릭 시 해당 할 일이 즉시 삭제됩니다.

### 6. 할 일 수정

- 각 할 일 우측에 **수정 아이콘(연필)**이 있습니다.
- 이 아이콘 역시 **마우스 오버 시에만 표시**됩니다.
- 클릭 시 할 일 내용이 **인라인 입력 박스**로 변경되며,  
  **Enter로 저장**, **ESC 또는 포커스 아웃**으로 취소됩니다.
- 빈 값/공백 입력 시 저장되지 않습니다.

### 7. 남은 할 일 개수 표시

- 할 일 목록 위에 **남은 할 일 개수**가  
  `"n tasks left"` 형태로 항상 표시됩니다.  
  (미완료 항목만 카운트)

### 8. 데이터 영속성(로컬스토리지)

- 할 일의 **추가/수정/삭제/토글** 등 모든 변경사항은  
  **즉시 로컬스토리지에 저장**되어,  
  새로고침/브라우저 재시작 후에도 이전 상태가 복원됩니다.

---

## TypeScript `as` 문법(타입 단언) 간단 가이드

TypeScript에서는 **DOM 요소를 다룰 때나, 값의 타입을 명확히 알고 있을 때**  
`as` 문법(타입 단언)을 자주 사용합니다.

### 왜 필요할까?

- `getElementById`, `querySelector` 등 DOM API는  
  반환값의 타입을 정확히 특정하지 못하는 경우가 많음  
  (예: HTMLElement | null)
- 실제로는 해당 id가 특정 요소임을 개발자가 더 잘 아는 경우가 많다!
- 이럴 때 "나는 이게 input이야", "div야" 등 **타입을 명확히 알려주는 문법**이 바로 `as`

### 코드 예시 (실전 주석)

```ts
const dateTitle = document.getElementById("date-title") as HTMLDivElement; // ← 이 id는 div임을 단언!
const addForm = document.getElementById("add-form") as HTMLFormElement; // ← form임을 단언!
const addInput = document.getElementById("add-input") as HTMLInputElement; // ← input임을 단언!
const taskCount = document.getElementById("task-count") as HTMLDivElement; // ← div임을 단언!
const todoList = document.getElementById("todo-list") as HTMLUListElement; // ← ul임을 단언!
```
