import { Module } from '@nestjs/common';
import { BackendReportController } from './backend-report.controller';
import { BackendReportService } from './backend-report.service';

@Module({
  controllers: [BackendReportController],
  providers: [BackendReportService],
  exports: [BackendReportService],
})
export class BackendReportModule {}
