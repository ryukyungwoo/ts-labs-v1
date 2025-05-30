// [문제]
// 블로그 사용자 정보를 관리한다.
// username(문자열, 필수), email(문자열, 선택적)을 갖는 Profile 인터페이스를 정의하라.
// 아래 leeProfile, parkProfile 모두 타입 에러가 나지 않게 하라.

const leeProfile = { username: "이유저" };
const parkProfile = { username: "박유저", email: "parkuser@blog.com" };

// 아래 함수 showProfile에 Profile 타입을 적용하고, email이 있으면 "이메일: xxx", 없으면 "이메일 없음"이 출력되게 하라.
function showProfile(profile) {
  if (profile.email) {
    console.log("이메일:", profile.email);
  } else {
    console.log("이메일 없음");
  }
}
