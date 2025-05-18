import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PageVersionService } from './page-version.service';
import { PageVersion } from 'src/dtos/page-version/page-version.model';
import { FindManyPageVersionArgs } from 'src/dtos/page-version/find-many-page-version.args';
import { PageVersionCreateInput } from 'src/dtos/page-version/page-version-create.input';

@Resolver(() => PageVersion)
export class PageVersionResolver {
  constructor(private readonly pageVersionService: PageVersionService) {}

  @Query(() => [PageVersion], { name: 'pageVersions' })
  async getAll(
    @Args() manyPageVersionArgs: FindManyPageVersionArgs,
  ): Promise<PageVersion[] | null> {
    return this.pageVersionService.findAll(manyPageVersionArgs);
  }

  @Query(() => PageVersion, { name: 'pageVersion' })
  async getOne(@Args('id') id: string): Promise<PageVersion> {
    return this.pageVersionService.findById(id);
  }

  @Mutation(() => PageVersion, { name: 'createPageVersion' })
  async create(
    @Args('input') input: PageVersionCreateInput,
  ): Promise<PageVersion> {
    return this.pageVersionService.create(input);
  }

  @Mutation(() => PageVersion, { name: 'updatePageVersion' })
  async update(
    @Args('id') id: string,
    @Args('input') input: PageVersionCreateInput,
  ): Promise<PageVersion> {
    return this.pageVersionService.updatePageVersion(id, input);
  }
}
