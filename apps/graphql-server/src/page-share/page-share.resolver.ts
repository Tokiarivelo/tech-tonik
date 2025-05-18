import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PageShareService } from './page-share.service';
import { PageShare } from 'src/dtos/page-share/page-share.model';
import { FindManyPageShareArgs } from 'src/dtos/page-share/find-many-page-share.args';
import { PageShareCreateInput } from 'src/dtos/page-share/page-share-create.input';

@Resolver(() => PageShare)
export class PageShareResolver {
  constructor(private readonly pageShareService: PageShareService) {}

  @Query(() => [PageShare], { name: 'pageShares' })
  async getAll(
    @Args() manyPageShareArgs: FindManyPageShareArgs,
  ): Promise<PageShare[] | null> {
    return this.pageShareService.findAll(manyPageShareArgs);
  }

  @Query(() => PageShare, { name: 'pageShare' })
  async getOne(@Args('id') id: string): Promise<PageShare> {
    return this.pageShareService.findById(id);
  }

  @Mutation(() => PageShare, { name: 'createPageShare' })
  async create(@Args('input') input: PageShareCreateInput): Promise<PageShare> {
    return this.pageShareService.create(input);
  }

  @Mutation(() => PageShare, { name: 'updatePageShare' })
  async update(
    @Args('id') id: string,
    @Args('input') input: PageShareCreateInput,
  ): Promise<PageShare> {
    return this.pageShareService.updatePageShare(id, input);
  }
}
