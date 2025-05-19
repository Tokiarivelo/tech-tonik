import { Injectable, NotFoundException } from '@nestjs/common';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { DeleteOneExitPageArgs } from 'src/dtos/exit-page/delete-one-exit-page.args';
import { ExitPageCreateInput } from 'src/dtos/exit-page/exit-page-create.input';
import { ExitPage } from 'src/dtos/exit-page/exit-page.model';
import { FindManyExitPageArgs } from 'src/dtos/exit-page/find-many-exit-page.args';
import { PrismaService } from 'src/prisma-module/prisma.service';
import { streamToBuffer } from 'src/utils/stream-to-buffer';

@Injectable()
export class ExitPageService {
  constructor(
    private readonly cloudinary: CloudinaryService,
    private readonly prisma: PrismaService,
  ) {}

  async create(input: ExitPageCreateInput): Promise<ExitPage> {
    // 1. Uploads Cloudinary
    const imageUrls = input.images
      ? await Promise.all(
          input.images.map(async (filePromise) => {
            const { createReadStream, filename } = await filePromise;
            const buffer = await streamToBuffer(createReadStream());
            return this.cloudinary.uploadFile(
              { buffer } as any,
              'exitpages/images',
            );
          }),
        )
      : [];

    const videoUrls = input.videos
      ? await Promise.all(
          input.videos.map(async (filePromise) => {
            const { createReadStream } = await filePromise;
            const buffer = await streamToBuffer(createReadStream());
            return this.cloudinary.uploadFile(
              { buffer } as any,
              'exitpages/videos',
            );
          }),
        )
      : [];

    const audioUrls = input.audios
      ? await Promise.all(
          input.audios.map(async (filePromise) => {
            const { createReadStream } = await filePromise;
            const buffer = await streamToBuffer(createReadStream());
            return this.cloudinary.uploadFile(
              { buffer } as any,
              'exitpages/audios',
            );
          }),
        )
      : [];

    // 2. Construire le JSON `input`
    const jsonData = {
      openingLine: input.openingLine,
      gifUrls: input.gifUrls || [],
      images: imageUrls,
      videos: videoUrls,
      audios: audioUrls,
      reactionWidget: { default: input.reactionDefault },
    };

    const exitPage = await this.prisma.exitPage.create({
      data: {
        data: input.data,
        slug: input.slug,
        tone: input.tone,
        author: input.author,
        template: input.template,
        tags: input.tags,
      },
    });
    return exitPage;
  }

  async updateExitPage(
    id: string,
    input: ExitPageCreateInput,
  ): Promise<ExitPage> {
    const exitPage = await this.prisma.exitPage.update({
      where: { id },
      data: {
        data: input.data,
        slug: input.slug,
        tone: input.tone,
        author: input.author,
        template: input.template,
        tags: input.tags,
        reactions: input.reactions,
        votes: input.votes,
      },
    });
    if (!exitPage) throw new NotFoundException(`ExitPage ${id} not found`);
    return exitPage;
  }

  async findAll(params: FindManyExitPageArgs): Promise<ExitPage[] | null> {
    const { skip, take, cursor, where, orderBy } = params;
    const exitPage = await this.prisma.exitPage.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
    return exitPage;
  }

  async findById(id: string): Promise<ExitPage> {
    const exitPage = await this.prisma.exitPage.findUnique({
      where: { id },
    });
    if (!exitPage) throw new NotFoundException(`ExitPage ${id} not found`);
    return exitPage;
  }

  async deleteExitPage({ where }: DeleteOneExitPageArgs): Promise<ExitPage> {
    const exitPage = await this.prisma.exitPage.delete({
      where,
    });

    if (!exitPage)
      throw new NotFoundException(
        `ExitPage ${JSON.stringify(where)} not found`,
      );
    return exitPage;
  }

  async deleteManyExitPageArgs(ids: string[]): Promise<ExitPage[]> {
    const exitPages = await this.prisma.exitPage.findMany({
      where: {
        id: { in: ids },
      },
    });

    if (!exitPages || exitPages.length === 0)
      throw new NotFoundException(`ExitPages ${JSON.stringify(ids)} not found`);

    await this.prisma.exitPage.deleteMany({
      where: {
        id: { in: ids },
      },
    });

    return exitPages;
  }
}
