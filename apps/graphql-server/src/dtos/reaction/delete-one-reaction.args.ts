import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReactionWhereUniqueInput } from './reaction-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneReactionArgs {

    @Field(() => ReactionWhereUniqueInput, {nullable:false})
    @Type(() => ReactionWhereUniqueInput)
    where!: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;
}
