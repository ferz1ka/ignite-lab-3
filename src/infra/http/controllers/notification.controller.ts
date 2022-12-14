import { Controller, Get, Post, Body } from '@nestjs/common';
import { NotificationService } from '../../../app/services/notificationService';
import { CreateNotificationDto } from '../dtos/createNotificationDto';

@Controller('notification')
export class NotificationController {

  constructor(private notificationService: NotificationService) { }

  @Post()
  async create(@Body() body: CreateNotificationDto) {
    const { recipientId, content, category } = body

    const { notification } = await this.notificationService.execute({
      content,
      category,
      recipientId,
    })

    return {
      notification
    }
  }
}
