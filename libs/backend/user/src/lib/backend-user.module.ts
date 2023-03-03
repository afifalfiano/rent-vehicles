import { Module } from '@nestjs/common';
import { BackendUserController } from './backend-user.controller';
import { BackendUserService } from './backend-user.service';

@Module({
  controllers: [BackendUserController],
  providers: [BackendUserService],
  exports: [BackendUserService],
})
export class BackendUserModule {}
