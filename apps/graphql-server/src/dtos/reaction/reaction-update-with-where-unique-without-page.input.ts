import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReactionWhereUniqueInput } from './reaction-where-unique.input';
import { Type } from 'class-transformer';
import { ReactionUpdateWithoutPageInput } from './reaction-update-without-page.input';

@InputType()
export class ReactionUpdateWithWhereUniqueWithoutPageInput {

    @Field(() => ReactionWhereUniqueInput, {nullable:false})
    @Type(() => ReactionWhereUniqueInput)
    where!: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;

    @Field(() => ReactionUpdateWithoutPageInput, {nullable:false})
    @Type(() => ReactionUpdateWithoutPageInput)
    data!: ReactionUpdateWithoutPageInput;
}
