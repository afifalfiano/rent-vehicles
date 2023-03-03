import { Module } from '@nestjs/common';
import { BackendItemModule } from '@rent-vehicles/backend/item';
import { BackendReportModule } from '@rent-vehicles/backend/report';
import { BackendUserModule } from '@rent-vehicles/backend/user';
import { BackendCategoryModule } from '@rent-vehicles/backend/category';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BackendCategoryModule, BackendItemModule, BackendReportModule, BackendUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
