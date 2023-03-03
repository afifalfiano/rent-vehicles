import { Test } from '@nestjs/testing';
import { BackendReportService } from './backend-report.service';

describe('BackendReportService', () => {
  let service: BackendReportService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendReportService],
    }).compile();

    service = module.get(BackendReportService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
