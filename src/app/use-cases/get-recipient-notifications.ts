import { Injectable } from "@nestjs/common"
import { NotificationModel } from "@app/models/notificationModel"
import { NotificationRepository } from "@app/repositories/notificationRepository"

interface GetRecipientNotificationsRequest {
  recipientId: string
}

interface GetRecipientNotificationsResponse {
  notifications: NotificationModel[]
}

@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationRepository: NotificationRepository) { }

  async execute(request: GetRecipientNotificationsRequest): Promise<GetRecipientNotificationsResponse> {
    const { recipientId } = request
    const notificationsByRecipientId = await this.notificationRepository.findManyByRecipientId(recipientId)
    return {
      notifications: notificationsByRecipientId
    }
  }
}