// [문제] in 패턴: 알림(Notification) 객체 타입 분기
// 이메일/문자/푸시알림 타입별로 메시지 출력

type EmailNotification = { to: string; subject: string; body: string };
type SmsNotification = { phone: string; message: string };
type PushNotification = { deviceId: string; alert: string };

type Notification = EmailNotification | SmsNotification | PushNotification;

function sendNotification(notif: Notification) {
  // 여기에 코드를 작성하세요.
}

// 사용 예시
// sendNotification({ to: "a@b.com", subject: "Hi", body: "내용" });
// sendNotification({ phone: "010-1234-5678", message: "문자" });
// sendNotification({ deviceId: "xyz", alert: "푸시" });
