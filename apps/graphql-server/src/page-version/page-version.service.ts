import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma-module/prisma.service';
import { PageVersionCreateInput } from 'src/dtos/@generated';
import { PageVersion } from 'src/dtos/@generated';
import { FindManyPageVersionArgs } from 'src/dtos/@generated';
import { DeleteOnePageVersionArgs } from 'src/dtos/@generated';

@Injectable()
export class PageVersionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: PageVersionCreateInput): Promise<PageVersion> {
    const pageVersion = await this.prisma.pageVersion.create({
      data: {
        data: input.data,
        version: input.version,
        page: input.page,
        updatedBy: input.updatedBy,
      },
    });
    return pageVersion;
  }

  async updatePageVersion(
    id: string,
    input: PageVersionCreateInput,
  ): Promise<PageVersion> {
    const pageVersion = await this.prisma.pageVersion.update({
      where: { id },
      data: {
        data: input.data,
        version: input.version,
        page: input.page,
        updatedBy: input.updatedBy,
      },
    });
    if (!pageVersion)
      throw new NotFoundException(`PageVersion ${id} not found`);
    return pageVersion;
  }

  async findAll(
    params: FindManyPageVersionArgs,
  ): Promise<PageVersion[] | null> {
    const { skip, take, cursor, where, orderBy } = params;
    const pageVersion = await this.prisma.pageVersion.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
    return pageVersion;
  }

  async findById(id: string): Promise<PageVersion> {
    const pageVersion = await this.prisma.pageVersion.findUnique({
      where: { id },
    });
    if (!pageVersion)
      throw new NotFoundException(`PageVersion ${id} not found`);
    return pageVersion;
  }

  async deletePageVersion({
    where,
  }: DeleteOnePageVersionArgs): Promise<PageVersion> {
    const pageVersion = await this.prisma.pageVersion.delete({
      where,
    });

    if (!pageVersion)
      throw new NotFoundException(
        `PageVersion ${JSON.stringify(where)} not found`,
      );
    return pageVersion;
  }

  async deleteManyPageVersionArgs(ids: string[]): Promise<PageVersion[]> {
    const pageVersions = await this.prisma.pageVersion.findMany({
      where: {
        id: { in: ids },
      },
    });

    if (!pageVersions || pageVersions.length === 0)
      throw new NotFoundException(
        `PageVersions ${JSON.stringify(ids)} not found`,
      );

    await this.prisma.pageVersion.deleteMany({
      where: {
        id: { in: ids },
      },
    });

    return pageVersions;
  }
}
