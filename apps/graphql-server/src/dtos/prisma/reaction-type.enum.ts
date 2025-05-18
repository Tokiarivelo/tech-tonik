import { registerEnumType } from '@nestjs/graphql';

export enum ReactionType {
    LIKE = "LIKE",
    LOVE = "LOVE",
    HAHA = "HAHA",
    SAD = "SAD",
    ANGRY = "ANGRY"
}


registerEnumType(ReactionType, { name: 'ReactionType', description: undefined })
