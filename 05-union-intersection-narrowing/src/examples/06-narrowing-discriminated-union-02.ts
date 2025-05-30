// 여러 타입이 혼재된 배열에서 타입별로 분기 처리 (ex. 알림 센터)
type Notification =
  | { type: "email"; email: string; title: string }
  | { type: "sms"; phone: string; message: string }
  | { type: "push"; deviceToken: string; content: string };

const notifications: Notification[] = [
  { type: "email", email: "user@email.com", title: "환영합니다!" },
  { type: "sms", phone: "010-1234-5678", message: "인증번호: 1234" },
  { type: "push", deviceToken: "abcde", content: "새 소식이 있습니다." },
];

// 내로잉 + switch-case 조합 예시
notifications.forEach((n) => {
  switch (n.type) {
    case "email":
      console.log(`[이메일] ${n.email} - ${n.title}`);
      break;
    case "sms":
      console.log(`[SMS] ${n.phone} - ${n.message}`);
      break;
    case "push":
      console.log(`[푸시] ${n.deviceToken} - ${n.content}`);
      break;
  }
});

export {};
