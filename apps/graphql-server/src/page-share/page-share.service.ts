import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma-module/prisma.service';
import { PageShareCreateInput } from 'src/dtos/page-share/page-share-create.input';
import { PageShare } from 'src/dtos/page-share/page-share.model';
import { FindManyPageShareArgs } from 'src/dtos/page-share/find-many-page-share.args';
import { DeleteOnePageShareArgs } from 'src/dtos/page-share/delete-one-page-share.args';

@Injectable()
export class PageShareService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: PageShareCreateInput): Promise<PageShare> {
    const pageShare = await this.prisma.pageShare.create({
      data: {
        platform: input.platform,
        page: input.page,
        user: input.user,
      },
    });
    return pageShare;
  }

  async updatePageShare(
    id: string,
    input: PageShareCreateInput,
  ): Promise<PageShare> {
    const pageShare = await this.prisma.pageShare.update({
      where: { id },
      data: {
        platform: input.platform,
        page: input.page,
        user: input.user,
      },
    });
    if (!pageShare) throw new NotFoundException(`PageShare ${id} not found`);
    return pageShare;
  }

  async findAll(params: FindManyPageShareArgs): Promise<PageShare[] | null> {
    const { skip, take, cursor, where, orderBy } = params;
    const pageShare = await this.prisma.pageShare.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
    return pageShare;
  }

  async findById(id: string): Promise<PageShare> {
    const pageShare = await this.prisma.pageShare.findUnique({
      where: { id },
    });
    if (!pageShare) throw new NotFoundException(`PageShare ${id} not found`);
    return pageShare;
  }

  async deletePageShare({ where }: DeleteOnePageShareArgs): Promise<PageShare> {
    const pageShare = await this.prisma.pageShare.delete({
      where,
    });

    if (!pageShare)
      throw new NotFoundException(
        `PageShare ${JSON.stringify(where)} not found`,
      );
    return pageShare;
  }

  async deleteManyPageShareArgs(ids: string[]): Promise<PageShare[]> {
    const pageShares = await this.prisma.pageShare.findMany({
      where: {
        id: { in: ids },
      },
    });

    if (!pageShares || pageShares.length === 0)
      throw new NotFoundException(
        `PageShares ${JSON.stringify(ids)} not found`,
      );

    await this.prisma.pageShare.deleteMany({
      where: {
        id: { in: ids },
      },
    });

    return pageShares;
  }
}
