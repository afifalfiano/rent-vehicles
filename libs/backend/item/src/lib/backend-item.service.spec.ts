import { Test } from '@nestjs/testing';
import { BackendItemService } from './backend-item.service';

describe('BackendItemService', () => {
  let service: BackendItemService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendItemService],
    }).compile();

    service = module.get(BackendItemService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
