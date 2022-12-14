import { InMemoryNotificationRepository } from "../../../test/repositories/InMemoryNotificationRepository"
import { NotificationService } from "./notificationService"

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const notificationService = new NotificationService(notificationRepository)

    const { notification } = await notificationService.execute({
      content: "Notificação 1",
      category: "Categoria 1",
      recipientId: "RecipienteId 1"
    })

    expect(notificationRepository.notifications).toHaveLength(1)
    expect(notificationRepository.notifications[0]).toEqual(notification)
  })
})