import { Injectable } from "@nestjs/common"
import { NotificationModel } from "@app/models/notificationModel"
import { NotificationRepository } from "@app/repositories/notificationRepository"

interface NotificationServiceRequest {
  recipientId: string
  content: string
  category: string
}

interface NotificationServiceResponse {
  notification: NotificationModel
}

@Injectable()
export class NotificationService {
  constructor(private notificationRepository: NotificationRepository) { }

  async execute(request: NotificationServiceRequest): Promise<NotificationServiceResponse> {
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