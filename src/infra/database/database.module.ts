import { Module } from '@nestjs/common'
import { NotificationRepository } from '@app/repositories/notificationRepository';
import { PrismaRepository } from './prisma/repositories/prismaRepository';
import { PrismaService } from './prisma/services/prismaService';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaRepository
    }
  ],
  exports: [
    NotificationRepository
  ]
})

export class DatabaseModule { }