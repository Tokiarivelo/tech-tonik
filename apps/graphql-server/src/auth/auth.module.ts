import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma-module/prisma.module';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersService } from 'src/user/users.service';
import { JwtService } from '@nestjs/jwt';
import { TokensService } from './token/tokens.service';

@Module({
  imports: [PrismaModule],
  providers: [
    AuthService,
    AuthResolver,
    UsersService,
    JwtService,
    TokensService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
