import { NotificationModel } from "@app/models/notificationModel";

export abstract class NotificationRepository {
  abstract findById(notificationId: string): Promise<NotificationModel>
  abstract findManyByRecipientId(recipientId: string): Promise<NotificationModel[]>
  abstract create(notification: NotificationModel): Promise<void>
  abstract save(notification: NotificationModel): Promise<void>

  // dev-only
  abstract list(): Promise<NotificationModel[]>
  abstract remove(notificationId: string): Promise<void>
}