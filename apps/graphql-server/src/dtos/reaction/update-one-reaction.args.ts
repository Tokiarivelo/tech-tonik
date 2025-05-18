import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReactionUpdateInput } from './reaction-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ReactionWhereUniqueInput } from './reaction-where-unique.input';

@ArgsType()
export class UpdateOneReactionArgs {

    @Field(() => ReactionUpdateInput, {nullable:false})
    @Type(() => ReactionUpdateInput)
    data!: ReactionUpdateInput;

    @Field(() => ReactionWhereUniqueInput, {nullable:false})
    @Type(() => ReactionWhereUniqueInput)
    where!: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;
}
