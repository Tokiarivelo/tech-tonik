import { Module } from '@nestjs/common';
import { ReactionService } from './vote.service';
import { ReactionResolver } from './vote.resolver';
import { PrismaModule } from 'src/prisma-module/prisma.module';
@Module({
  imports: [PrismaModule],
  providers: [ReactionService, ReactionResolver],
  exports: [ReactionService],
})
export class ReactionModule {}
