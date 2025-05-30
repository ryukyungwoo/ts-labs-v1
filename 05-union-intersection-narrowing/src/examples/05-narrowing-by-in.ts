type EmailNotification = { to: string; subject: string; body: string };
type SmsNotification = { phone: string; message: string };
type PushNotification = { deviceId: string; alert: string };

type Notification = EmailNotification | SmsNotification | PushNotification;

function sendNotification(notif: Notification) {
  if ("to" in notif) {
    // EmailNotification
    console.log(`이메일 발송: ${notif.to}, 제목: ${notif.subject}`);
  } else if ("phone" in notif) {
    // SmsNotification
    console.log(`SMS 발송: ${notif.phone}, 내용: ${notif.message}`);
  } else {
    // PushNotification
    console.log(`푸시알림 발송: ${notif.deviceId}, 메시지: ${notif.alert}`);
  }
}

// 사용 예시
const sms: Notification = { phone: "010-1234-5678", message: "안녕하세요!" };
sendNotification(sms);
