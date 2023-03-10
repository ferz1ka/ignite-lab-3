import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { NotificationRepository } from '@app/repositories/notificationRepository';
import { SendNotification } from '@app/use-cases/send-notification';
import { CreateNotificationDto } from '../dtos/createNotificationDto';
import { NotificationViewModel } from '../viewModels/notificationViewModel';

@Controller('notification')
export class NotificationController {

  constructor(
    private sendNotification: SendNotification,
    private notificationRepository: NotificationRepository
  ) { }

  @Get()
  async list() {
    return await this.notificationRepository.list()
  }

  @Get(':id')
  async show(@Param('id') id: string) {
    return await this.notificationRepository.findById(id)
  }

  @Post()
  async create(@Body() body: CreateNotificationDto) {
    const { recipientId, content, category } = body

    const { notification } = await this.sendNotification.execute({
      content,
      category,
      recipientId,
    })

    return {
      notification: NotificationViewModel.toHTTP(notification)
    }
  }

  // DEV ONLY
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.notificationRepository.remove(id)
  }
}
