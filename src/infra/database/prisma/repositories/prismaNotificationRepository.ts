import { Injectable } from "@nestjs/common/decorators";
import { NotificationModel } from "@app/models/notificationModel";
import { NotificationRepository } from "@app/repositories/notificationRepository";
import { PrismaService } from "../services/prismaService";
import { PrismaNotificationMapper } from "../mappers/prismaNotificationMapper";

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) { }

  async findById(notificationId: string): Promise<NotificationModel> {
    return await this.prismaService.notification.findUnique({
      where: {
        id: notificationId
      }
    }) as NotificationModel
  }

  async findManyByRecipientId(recipientId: string): Promise<NotificationModel[]> {
    return await this.prismaService.notification.findMany({
      where: {
        recipientId: recipientId
      }
    }) as NotificationModel[]
  }

  async create(notification: NotificationModel): Promise<void> {
    const mappedNotificationData = PrismaNotificationMapper.toPrisma(notification)
    await this.prismaService.notification.create({
      data: mappedNotificationData
    })
  }

  async save(notification: NotificationModel): Promise<void> {
    await this.prismaService.notification.update({
      where: {
        id: notification.id
      },
      data: notification
    })
  }

  // dev-only
  async list(): Promise<NotificationModel[]> {
    return await this.prismaService.notification.findMany() as NotificationModel[]
  }

  // dev-only
  async remove(notificationId: string): Promise<void> {
    await this.prismaService.notification.delete({
      where: {
        id: notificationId
      }
    })
  }
}