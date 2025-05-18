import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReactionWhereUniqueInput } from './reaction-where-unique.input';
import { Type } from 'class-transformer';
import { ReactionCreateInput } from './reaction-create.input';
import { ReactionUpdateInput } from './reaction-update.input';

@ArgsType()
export class UpsertOneReactionArgs {

    @Field(() => ReactionWhereUniqueInput, {nullable:false})
    @Type(() => ReactionWhereUniqueInput)
    where!: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;

    @Field(() => ReactionCreateInput, {nullable:false})
    @Type(() => ReactionCreateInput)
    create!: ReactionCreateInput;

    @Field(() => ReactionUpdateInput, {nullable:false})
    @Type(() => ReactionUpdateInput)
    update!: ReactionUpdateInput;
}
