import { NotificationModel } from "../models/notificationModel";

export abstract class NotificationRepository {
  abstract list(): Promise<NotificationModel[]>
  abstract create(notification: NotificationModel): Promise<void>
}