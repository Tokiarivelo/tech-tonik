import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReactionWhereUniqueInput } from './reaction-where-unique.input';
import { Type } from 'class-transformer';
import { ReactionUpdateWithoutUserInput } from './reaction-update-without-user.input';

@InputType()
export class ReactionUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ReactionWhereUniqueInput, {nullable:false})
    @Type(() => ReactionWhereUniqueInput)
    where!: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;

    @Field(() => ReactionUpdateWithoutUserInput, {nullable:false})
    @Type(() => ReactionUpdateWithoutUserInput)
    data!: ReactionUpdateWithoutUserInput;
}
