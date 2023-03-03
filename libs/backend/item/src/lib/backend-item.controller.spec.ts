import { Test } from '@nestjs/testing';
import { BackendItemController } from './backend-item.controller';
import { BackendItemService } from './backend-item.service';

describe('BackendItemController', () => {
  let controller: BackendItemController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendItemService],
      controllers: [BackendItemController],
    }).compile();

    controller = module.get(BackendItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
