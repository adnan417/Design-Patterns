const { EmailNotification, PushNotification, MobileNotification } = require("./notification-service");

class NotificationFactory {

    static createNotification(type) {
        switch (type) {
            case "email":
                return new EmailNotification();
            case "push":
                return new PushNotification();
            case "mobile":
                return new MobileNotification();
            default:
                throw new Error("Invalid notification type");
        }
    }
}

module.exports = NotificationFactory;