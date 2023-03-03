import { Module } from '@nestjs/common';
import { BackendItemController } from './backend-item.controller';
import { BackendItemService } from './backend-item.service';

@Module({
  controllers: [BackendItemController],
  providers: [BackendItemService],
  exports: [BackendItemService],
})
export class BackendItemModule {}
