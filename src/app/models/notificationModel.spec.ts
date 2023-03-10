import { makeNotification } from "@test/factories/notification-factory"

describe('Nofitication', () => {
  it('should be able to create a notification', () => {
    expect(() => {
      makeNotification()
    }).toBeTruthy()
  })
})
