import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module';
import { NotificationController } from './controllers/notification.controller';
import { NotificationService } from '../../app/services/notificationService'
import { PrismaRepository } from '../database/prisma/repositories/prismaRepository';
import { NotificationRepository } from '../../app/repositories/notificationRepository';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class HttpModule { }