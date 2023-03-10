import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationRepository } from "@test/repositories/InMemoryNotificationRepository"
import { GetRecipientNotifications } from "./get-recipient-notifications"

describe('Get recipient notification', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const getRecipientNotifications = new GetRecipientNotifications(notificationRepository)

    await notificationRepository.create(makeNotification({ recipientId: 'recipientId-1' }))
    await notificationRepository.create(makeNotification({ recipientId: 'recipientId-1' }))
    await notificationRepository.create(makeNotification({ recipientId: 'recipientId-2' }))

    const { notifications } = await getRecipientNotifications.execute({ recipientId: "recipientId-1" })
    expect(notifications).toHaveLength(2)
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: "recipientId-1" }),
        expect.objectContaining({ recipientId: "recipientId-1" })
      ])
    )
  })
})