import { Injectable } from '@nestjs/common';
import { RefreshToken } from 'src/dtos/refresh-token/refresh-token.model';
import { PrismaService } from 'src/prisma-module/prisma.service';

@Injectable()
export class TokensService {
  constructor(private prisma: PrismaService) {}

  /**
   * Crée un refresh token persistant en base.
   * Plusieurs tokens par user pour sessions multiples.
   */
  async create(
    userId: string,
    token: string,
    expiresAt: Date,
  ): Promise<RefreshToken> {
    return this.prisma.refreshToken.create({
      data: { token, expiresAt, userId },
    });
  }

  /** Récupère un token valide (non expiré) */
  async findValid(token: string): Promise<RefreshToken | null> {
    return this.prisma.refreshToken.findFirst({
      where: { token, expiresAt: { gt: new Date() } },
    });
  }

  /** Révoque tous les tokens d'un user pour logout global */
  async revoke(userId: string): Promise<number> {
    const deleted = await this.prisma.refreshToken.deleteMany({
      where: { userId },
    });
    return deleted.count;
  }
}
