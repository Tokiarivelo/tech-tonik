import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma-module/prisma.service';
import { PageViewCreateInput } from 'src/dtos/@generated';
import { PageView } from 'src/dtos/@generated';
import { FindManyPageViewArgs } from 'src/dtos/@generated';
import { DeleteOnePageViewArgs } from 'src/dtos/@generated';

@Injectable()
export class PageViewService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: PageViewCreateInput): Promise<PageView> {
    const pageView = await this.prisma.pageView.create({
      data: {
        page: input.page,
        user: input.user,
        sessionId: input.sessionId,
      },
    });
    return pageView;
  }

  async updatePageView(
    id: string,
    input: PageViewCreateInput,
  ): Promise<PageView> {
    const pageView = await this.prisma.pageView.update({
      where: { id },
      data: {
        page: input.page,
        user: input.user,
        sessionId: input.sessionId,
      },
    });
    if (!pageView) throw new NotFoundException(`PageView ${id} not found`);
    return pageView;
  }

  async findAll(params: FindManyPageViewArgs): Promise<PageView[] | null> {
    const { skip, take, cursor, where, orderBy } = params;
    const pageView = await this.prisma.pageView.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
    return pageView;
  }

  async findById(id: string): Promise<PageView> {
    const pageView = await this.prisma.pageView.findUnique({
      where: { id },
    });
    if (!pageView) throw new NotFoundException(`PageView ${id} not found`);
    return pageView;
  }

  async deletePageView({ where }: DeleteOnePageViewArgs): Promise<PageView> {
    const pageView = await this.prisma.pageView.delete({
      where,
    });

    if (!pageView)
      throw new NotFoundException(
        `PageView ${JSON.stringify(where)} not found`,
      );
    return pageView;
  }

  async deleteManyPageViewArgs(ids: string[]): Promise<PageView[]> {
    const pageViews = await this.prisma.pageView.findMany({
      where: {
        id: { in: ids },
      },
    });

    if (!pageViews || pageViews.length === 0)
      throw new NotFoundException(`PageViews ${JSON.stringify(ids)} not found`);

    await this.prisma.pageView.deleteMany({
      where: {
        id: { in: ids },
      },
    });

    return pageViews;
  }
}
