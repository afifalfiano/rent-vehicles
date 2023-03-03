import { Test } from '@nestjs/testing';
import { BackendReportController } from './backend-report.controller';
import { BackendReportService } from './backend-report.service';

describe('BackendReportController', () => {
  let controller: BackendReportController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendReportService],
      controllers: [BackendReportController],
    }).compile();

    controller = module.get(BackendReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
