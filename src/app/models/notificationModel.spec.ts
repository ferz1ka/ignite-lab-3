import { NotificationModel } from "./notificationModel"

describe('Nofitication', () => {
  it('should be able to create a notification', () => {
    expect(() => {
      new NotificationModel({
        recipientId: 'recipiente 1',
        content: 'Nofiticação de teste maior que 5 caracteres e menor que 255',
        category: 'categoria 1',
      })
    }).toBeTruthy()
  })
})
