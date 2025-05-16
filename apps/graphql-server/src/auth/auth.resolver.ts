import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { TokensService } from './token/tokens.service';

import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LoginInput } from 'src/dtos/auth/login.input';
import { User } from 'src/dtos/user/user.model';
import { RegisterInput } from 'src/dtos/auth/register.input';

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private tokensService: TokensService,
  ) {}

  @Mutation(() => String, { nullable: true })
  async login(@Args('data') data: LoginInput) {
    const result = await this.authService.login(data);
    if (!result || !result.accessToken) {
      return null;
    }

    console.log('result :>> ', result);

    return result.accessToken;
  }

  @Mutation(() => User)
  async register(@Args('data') data: RegisterInput) {
    return this.authService.register(data);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async logout(@Context() { req }: any): Promise<boolean> {
    await this.tokensService.revoke(req.user.userId);
    return true;
  }
}
