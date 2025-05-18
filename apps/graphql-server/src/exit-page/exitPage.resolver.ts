import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExitPageService } from './exitPage.service';
import { ExitPage } from 'src/dtos/exit-page/exit-page.model';
import { FindManyExitPageArgs } from 'src/dtos/exit-page/find-many-exit-page.args';
import { ExitPageCreateInput } from 'src/dtos/exit-page/exit-page-create.input';

@Resolver(() => ExitPage)
export class ExitPageResolver {
  constructor(private readonly exitPageService: ExitPageService) {}

  @Query(() => [ExitPage], { name: 'exitPages' })
  async getAll(
    @Args() manyExitPageArgs: FindManyExitPageArgs,
  ): Promise<ExitPage[] | null> {
    return this.exitPageService.findAll(manyExitPageArgs);
  }

  @Query(() => ExitPage, { name: 'exitPage' })
  async getOne(@Args('id') id: string): Promise<ExitPage> {
    return this.exitPageService.findById(id);
  }

  @Mutation(() => ExitPage, { name: 'createExitPage' })
  async create(@Args('input') input: ExitPageCreateInput): Promise<ExitPage> {
    return this.exitPageService.create(input);
  }

  @Mutation(() => ExitPage, { name: 'updateExitPage' })
  async update(
    @Args('id') id: string,
    @Args('input') input: ExitPageCreateInput,
  ): Promise<ExitPage> {
    return this.exitPageService.updateExitPage(id, input);
  }
}
