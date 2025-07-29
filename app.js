const NotifcationFactory = require("./notification/notification-factory");

const notification = NotifcationFactory.createNotification("email");
notification.sendNotification();
