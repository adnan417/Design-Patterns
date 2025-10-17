const Notification = require("./notification-interface");

class EmailNotification extends Notification {
    sendNotification() {
        console.log("Email sent");
    }
}

class MobileNotification extends Notification {
    sendNotification() {
        console.log("Mobile notification sent");
    }
}

class PushNotification extends Notification {
    sendNotification() {
        console.log("Push notification sent");
    }
}

module.exports = { EmailNotification, MobileNotification, PushNotification };