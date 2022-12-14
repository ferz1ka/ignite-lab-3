import { Module } from '@nestjs/common'
import { NotificationController } from './controllers/notification.controller';
import { NotificationService } from '../../app/services/notificationService'
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class HttpModule { }