import { NotificationModel } from "@app/models/notificationModel"
import { NotificationRepository } from "@app/repositories/notificationRepository"

export class InMemoryNotificationRepository implements NotificationRepository {

  public notifications: NotificationModel[] = []

  async findById(notificationId: string): Promise<NotificationModel> {
    const notification = this.notifications.find(item => item.id === notificationId)
    if (!notification) return null
    return notification
  }

  async findManyByRecipientId(recipientId: string): Promise<NotificationModel[]> {
    return this.notifications.filter(item => item.recipientId === recipientId)
  }

  async create(notification: NotificationModel) {
    this.notifications.push(notification)
  }

  async save(notification: NotificationModel): Promise<void> {
    const notificationIdx = this.notifications.findIndex(item => item.id === notification.id)
    if (notificationIdx >= 0) this.notifications[notificationIdx] = notification

  }

  // dev-only
  async list(): Promise<NotificationModel[]> {
    return this.notifications
  }

  // dev-only
  async remove(notificationId: string): Promise<void> {
    throw new Error("Method not implemented.")
  }
}