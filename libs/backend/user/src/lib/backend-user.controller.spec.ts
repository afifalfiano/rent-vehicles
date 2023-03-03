import { Test } from '@nestjs/testing';
import { BackendUserController } from './backend-user.controller';
import { BackendUserService } from './backend-user.service';

describe('BackendUserController', () => {
  let controller: BackendUserController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendUserService],
      controllers: [BackendUserController],
    }).compile();

    controller = module.get(BackendUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
