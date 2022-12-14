import { NotificationModel } from "src/app/models/notificationModel"
import { NotificationRepository } from "src/app/repositories/notificationRepository"

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: NotificationModel[] = []

  async create(notification: NotificationModel) {
    this.notifications.push(notification)
  }
}