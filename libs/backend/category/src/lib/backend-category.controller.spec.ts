import { Test } from '@nestjs/testing';
import { BackendCategoryController } from './backend-category.controller';
import { BackendCategoryService } from './backend-category.service';

describe('BackendCategoryController', () => {
  let controller: BackendCategoryController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendCategoryService],
      controllers: [BackendCategoryController],
    }).compile();

    controller = module.get(BackendCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
