/**
 * [문제] 회원 이름이 담긴 string 배열 users를 만들고,
 * 다음 조건을 만족하는 코드를 작성하세요.
 * 1. 배열에 "eunji", "minsu", "sora"를 추가
 * 2. 길이가 4 이하인 이름만 모아 filteredUsers에 저장
 * 3. 모든 이름을 대문자로 변환해서 upperUsers에 저장
 */

// TODO: users 배열 선언 및 위 조건 처리

let users: string[];
users = ["eunji", "minsu", "sora"];

let filteredUsers: string[] = [];
let upperUsers: string[] = [];

users.forEach((e) => {
  if (e.length <= 4) {
    filteredUsers.push(e);
  }
  upperUsers.push(e.toUpperCase());
});
