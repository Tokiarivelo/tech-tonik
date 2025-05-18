import { Module } from '@nestjs/common';
import { ExitPageService } from './exitPage.service';
import { ExitPageResolver } from './exitPage.resolver';
import { PrismaModule } from 'src/prisma-module/prisma.module';
@Module({
  imports: [PrismaModule],
  providers: [ExitPageService, ExitPageResolver],
  exports: [ExitPageService],
})
export class ExitPageModule {}
