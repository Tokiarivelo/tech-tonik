import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { UsersService } from './users.service';
import { User } from 'src/dtos/user/user.model';
import { FindManyUserArgs } from 'src/dtos/user/find-many-user.args';
import { UserCreateInput } from 'src/dtos/user/user-create.input';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  async getAll(@Args() manyUserArgs: FindManyUserArgs): Promise<User[] | null> {
    return this.usersService.findAll(manyUserArgs);
  }

  @Query(() => User, { name: 'user' })
  async getOne(@Args('id') id: string): Promise<User> {
    return this.usersService.findById(id);
  }

  @Query(() => User)
  @UseGuards(JwtAuthGuard) // 👈 protège la route
  me(@CurrentUser() user: User) {
    return this.usersService.findById(user.id);
  }

  @Mutation(() => User, { name: 'createUser' })
  async create(@Args('input') input: UserCreateInput): Promise<User> {
    return this.usersService.create(input);
  }
}
