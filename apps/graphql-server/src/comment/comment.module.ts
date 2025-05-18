import { Module } from '@nestjs/common';
import { TemplateService } from './comment.service';
import { TemplateResolver } from './comment.resolver';
import { PrismaModule } from 'src/prisma-module/prisma.module';
@Module({
  imports: [PrismaModule],
  providers: [TemplateService, TemplateResolver],
  exports: [TemplateService],
})
export class TemplateModule {}
