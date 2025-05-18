import { Module } from '@nestjs/common';
import { PageShareService } from './page-share.service';
import { PageShareResolver } from './page-share.resolver';
import { PrismaModule } from 'src/prisma-module/prisma.module';
@Module({
  imports: [PrismaModule],
  providers: [PageShareService, PageShareResolver],
  exports: [PageShareService],
})
export class PageShareModule {}
