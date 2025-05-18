import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TemplateService } from './template.service';
import { Template } from 'src/dtos/template/template.model';
import { FindManyTemplateArgs } from 'src/dtos/template/find-many-template.args';
import { TemplateCreateInput } from 'src/dtos/template/template-create.input';

@Resolver(() => Template)
export class TemplateResolver {
  constructor(private readonly templateService: TemplateService) {}

  @Query(() => [Template], { name: 'templates' })
  async getAll(
    @Args() manyTemplateArgs: FindManyTemplateArgs,
  ): Promise<Template[] | null> {
    return this.templateService.findAll(manyTemplateArgs);
  }

  @Query(() => Template, { name: 'template' })
  async getOne(@Args('id') id: string): Promise<Template> {
    return this.templateService.findById(id);
  }

  @Mutation(() => Template, { name: 'createTemplate' })
  async create(@Args('input') input: TemplateCreateInput): Promise<Template> {
    return this.templateService.create(input);
  }

  @Mutation(() => Template, { name: 'updateTemplate' })
  async update(
    @Args('id') id: string,
    @Args('input') input: TemplateCreateInput,
  ): Promise<Template> {
    return this.templateService.updateTemplate(id, input);
  }
}
