import { Module } from '@nestjs/common';
import { PageVersionService } from './page-version.service';
import { PageVersionResolver } from './page-version.resolver';
import { PrismaModule } from 'src/prisma-module/prisma.module';
@Module({
  imports: [PrismaModule],
  providers: [PageVersionService, PageVersionResolver],
  exports: [PageVersionService],
})
export class PageVersionModule {}
