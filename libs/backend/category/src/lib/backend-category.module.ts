import { Module } from '@nestjs/common';
import { BackendCategoryController } from './backend-category.controller';
import { BackendCategoryService } from './backend-category.service';

@Module({
  controllers: [BackendCategoryController],
  providers: [BackendCategoryService],
  exports: [BackendCategoryService],
})
export class BackendCategoryModule {}
