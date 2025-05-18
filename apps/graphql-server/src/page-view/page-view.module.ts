import { Module } from '@nestjs/common';
import { PageViewService } from './page-view.service';
import { PageViewResolver } from './page-view.resolver';
import { PrismaModule } from 'src/prisma-module/prisma.module';
@Module({
  imports: [PrismaModule],
  providers: [PageViewService, PageViewResolver],
  exports: [PageViewService],
})
export class PageViewModule {}
