import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma-module/prisma.service';
import { TemplateCreateInput } from 'src/dtos/template/template-create.input';
import { Template } from 'src/dtos/template/template.model';
import { FindManyTemplateArgs } from 'src/dtos/template/find-many-template.args';
import { DeleteOneTemplateArgs } from 'src/dtos/template/delete-one-template.args';

@Injectable()
export class TemplateService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: TemplateCreateInput): Promise<Template> {
    const template = await this.prisma.template.create({
      data: {
        content: input.content,
        name: input.name,
        description: input.description,
        placeholders: input.placeholders,
      },
    });
    return template;
  }

  async updateTemplate(
    id: string,
    input: TemplateCreateInput,
  ): Promise<Template> {
    const template = await this.prisma.template.update({
      where: { id },
      data: {
        content: input.content,
        name: input.name,
        description: input.description,
        placeholders: input.placeholders,
      },
    });
    if (!template) throw new NotFoundException(`Template ${id} not found`);
    return template;
  }

  async findAll(params: FindManyTemplateArgs): Promise<Template[] | null> {
    const { skip, take, cursor, where, orderBy } = params;
    const template = await this.prisma.template.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
    return template;
  }

  async findById(id: string): Promise<Template> {
    const template = await this.prisma.template.findUnique({
      where: { id },
    });
    if (!template) throw new NotFoundException(`Template ${id} not found`);
    return template;
  }

  async deleteTemplate({ where }: DeleteOneTemplateArgs): Promise<Template> {
    const template = await this.prisma.template.delete({
      where,
    });

    if (!template)
      throw new NotFoundException(
        `Template ${JSON.stringify(where)} not found`,
      );
    return template;
  }

  async deleteManyTemplateArgs(ids: string[]): Promise<Template[]> {
    const templates = await this.prisma.template.findMany({
      where: {
        id: { in: ids },
      },
    });

    if (!templates || templates.length === 0)
      throw new NotFoundException(`Templates ${JSON.stringify(ids)} not found`);

    await this.prisma.template.deleteMany({
      where: {
        id: { in: ids },
      },
    });

    return templates;
  }
}
