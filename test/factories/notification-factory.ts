import { NotificationModel, NotificationModelProps } from "@app/models/notificationModel";

type Override = Partial<NotificationModelProps>

export function makeNotification(override: Override = {}) {
  return new NotificationModel({
    content: "Conteúdo",
    category: "Categoria",
    recipientId: "Recipiente",
    ...override
  })
}