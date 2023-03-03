import { Test } from '@nestjs/testing';
import { BackendCategoryService } from './backend-category.service';

describe('BackendCategoryService', () => {
  let service: BackendCategoryService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendCategoryService],
    }).compile();

    service = module.get(BackendCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
