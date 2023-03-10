import { Module } from '@nestjs/common'
import { NotificationRepository } from '@app/repositories/notificationRepository';
import { PrismaNotificationRepository } from './prisma/repositories/prismaNotificationRepository';
import { PrismaService } from './prisma/services/prismaService';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationRepository
    }
  ],
  exports: [
    NotificationRepository
  ]
})

export class DatabaseModule { }