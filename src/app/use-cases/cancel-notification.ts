import { Injectable } from "@nestjs/common"
import { NotificationRepository } from "@app/repositories/notificationRepository"
import { NotificationNotFound } from "./errors/notification-not-found"

interface CancelNotificationRequest {
  notificationId: string
}

@Injectable()
export class CancelNotification {
  constructor(private notificationRepository: NotificationRepository) { }

  async execute(request: CancelNotificationRequest): Promise<void> {
    const { notificationId } = request

    const notification = await this.notificationRepository.findById(notificationId)
    if (!notification) throw new NotificationNotFound()
    notification.cancel()

    await this.notificationRepository.save(notification)
  }
}