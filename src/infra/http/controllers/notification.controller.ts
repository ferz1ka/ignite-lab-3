import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { NotificationRepository } from '@app/repositories/notificationRepository';
import { NotificationService } from '@app/use-cases/notificationService';
import { CreateNotificationDto } from '../dtos/createNotificationDto';

@Controller('notification')
export class NotificationController {

  constructor(
    private notificationService: NotificationService,
    private notificationRepository: NotificationRepository
  ) { }

  @Get()
  async list() {
    return await this.notificationRepository.list()
  }

  @Get(':id')
  async show(@Param('id') id: string) {
    return await this.notificationRepository.show(id)
  }

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

  // DEV ONLY
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.notificationRepository.remove(id)
  }
}
