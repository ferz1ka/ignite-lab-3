import { NotificationModel } from "@app/models/notificationModel";

export class PrismaNotificationMapper {
  static toPrisma(notification: NotificationModel) {
    return {
      id: notification.id,
      recipientId: notification.recipientId,
      category: notification.category,
      content: notification.content,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    }
  }
}