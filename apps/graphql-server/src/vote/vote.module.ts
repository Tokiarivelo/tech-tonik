import { Module } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteResolver } from './vote.resolver';
import { PrismaModule } from 'src/prisma-module/prisma.module';
@Module({
  imports: [PrismaModule],
  providers: [VoteService, VoteResolver],
  exports: [VoteService],
})
export class VoteModule {}
