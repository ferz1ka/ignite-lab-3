import { InMemoryNotificationRepository } from "@test/repositories/InMemoryNotificationRepository"
import { SendNotification } from "./send-notification"

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const sendNotification = new SendNotification(notificationRepository)

    const { notification } = await sendNotification.execute({
      content: "Notificação 1",
      category: "Categoria 1",
      recipientId: "RecipienteId 1"
    })

    expect(notificationRepository.notifications).toHaveLength(1)
    expect(notificationRepository.notifications[0]).toEqual(notification)
  })
})