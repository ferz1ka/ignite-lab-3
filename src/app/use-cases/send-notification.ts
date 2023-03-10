import { Injectable } from "@nestjs/common"
import { NotificationModel } from "@app/models/notificationModel"
import { NotificationRepository } from "@app/repositories/notificationRepository"

interface SendNotificationRequest {
  recipientId: string
  content: string
  category: string
}

interface SendNotificationResponse {
  notification: NotificationModel
}

@Injectable()
export class SendNotification {
  constructor(private notificationRepository: NotificationRepository) { }

  async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request

    const notification = new NotificationModel({
      recipientId,
      content,
      category
    })

    await this.notificationRepository.create(notification)

    return {
      notification
    }
  }

}