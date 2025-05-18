import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PageViewService } from './page-view.service';
import { PageView } from 'src/dtos/page-view/page-view.model';
import { FindManyPageViewArgs } from 'src/dtos/page-view/find-many-page-view.args';
import { PageViewCreateInput } from 'src/dtos/page-view/page-view-create.input';

@Resolver(() => PageView)
export class PageViewResolver {
  constructor(private readonly pageViewService: PageViewService) {}

  @Query(() => [PageView], { name: 'pageViews' })
  async getAll(
    @Args() manyPageViewArgs: FindManyPageViewArgs,
  ): Promise<PageView[] | null> {
    return this.pageViewService.findAll(manyPageViewArgs);
  }

  @Query(() => PageView, { name: 'pageView' })
  async getOne(@Args('id') id: string): Promise<PageView> {
    return this.pageViewService.findById(id);
  }

  @Mutation(() => PageView, { name: 'createPageView' })
  async create(@Args('input') input: PageViewCreateInput): Promise<PageView> {
    return this.pageViewService.create(input);
  }

  @Mutation(() => PageView, { name: 'updatePageView' })
  async update(
    @Args('id') id: string,
    @Args('input') input: PageViewCreateInput,
  ): Promise<PageView> {
    return this.pageViewService.updatePageView(id, input);
  }
}
