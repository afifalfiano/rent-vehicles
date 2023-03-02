import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ItemModule } from './item/item.module';
import { ReportModule } from './report/report.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CategoryModule, ItemModule, ReportModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
