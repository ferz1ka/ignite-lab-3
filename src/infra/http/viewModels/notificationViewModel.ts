import { NotificationModel } from "@app/models/notificationModel";

export class NotificationViewModel {
  static toHTTP(notification: NotificationModel) {
    return {
      id: notification.id,
      content: notification.content,
      category: notification.category,
      recipientId: notification.recipientId
    }
  }
}