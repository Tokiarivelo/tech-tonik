import { Module } from '@nestjs/common';
import { ExitPageService } from './exitPage.service';
import { ExitPageResolver } from './exitPage.resolver';
import { PrismaModule } from 'src/prisma-module/prisma.module';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
@Module({
  imports: [PrismaModule, CloudinaryModule],
  providers: [ExitPageService, ExitPageResolver],
  exports: [ExitPageService],
})
export class ExitPageModule {}
