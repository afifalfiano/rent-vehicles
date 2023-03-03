import { Test } from '@nestjs/testing';
import { BackendUserService } from './backend-user.service';

describe('BackendUserService', () => {
  let service: BackendUserService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendUserService],
    }).compile();

    service = module.get(BackendUserService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
