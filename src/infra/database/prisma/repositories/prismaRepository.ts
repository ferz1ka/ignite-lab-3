import { Injectable } from "@nestjs/common/decorators";
import { NotificationModel } from "../../../../app/models/notificationModel";
import { NotificationRepository } from "../../../../app/repositories/notificationRepository";
import { PrismaService } from "../services/prismaService";

@Injectable()
export class PrismaRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) { }

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
}