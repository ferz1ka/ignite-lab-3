import { NotificationModel } from "@app/models/notificationModel"
import { NotificationRepository } from "@app/repositories/notificationRepository"

export class InMemoryNotificationRepository implements NotificationRepository {

  public notifications: NotificationModel[] = []

  async create(notification: NotificationModel) {
    this.notifications.push(notification)
  }

  list(): Promise<NotificationModel[]> {
    throw new Error("Method not implemented.")
  }
  show(notificationId: string): Promise<NotificationModel> {
    throw new Error("Method not implemented.")
  }
  remove(notificationId: string): Promise<void> {
    throw new Error("Method not implemented.")
  }

}