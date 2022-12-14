import { NotificationModel } from "../models/notificationModel";

export abstract class NotificationRepository {
  abstract create(notification: NotificationModel): Promise<void>
}