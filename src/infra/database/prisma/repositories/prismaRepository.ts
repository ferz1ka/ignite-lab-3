import { Injectable } from "@nestjs/common/decorators";
import { NotificationModel } from "../../../../app/models/notificationModel";
import { NotificationRepository } from "../../../../app/repositories/notificationRepository";
import { PrismaService } from "../services/prismaService";

@Injectable()
export class PrismaRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) { }

  async list(): Promise<NotificationModel[]> {
    return await this.prismaService.notification.findMany() as NotificationModel[]
  }

  async show(notificationId: string): Promise<NotificationModel> {
    return await this.prismaService.notification.findUnique({
      where: {
        id: notificationId
      }
    }) as NotificationModel
  }

  async create(notification: NotificationModel): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        recipientId: notification.recipientId,
        category: notification.category,
        content: notification.content,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      }
    })
  }

  async remove(notificationId: string): Promise<void> {
    await this.prismaService.notification.delete({
      where: {
        id: notificationId
      }
    })
  }
}