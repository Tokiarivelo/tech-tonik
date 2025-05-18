import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReactionWhereUniqueInput } from './reaction-where-unique.input';
import { Type } from 'class-transformer';
import { ReactionCreateWithoutPageInput } from './reaction-create-without-page.input';

@InputType()
export class ReactionCreateOrConnectWithoutPageInput {

    @Field(() => ReactionWhereUniqueInput, {nullable:false})
    @Type(() => ReactionWhereUniqueInput)
    where!: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;

    @Field(() => ReactionCreateWithoutPageInput, {nullable:false})
    @Type(() => ReactionCreateWithoutPageInput)
    create!: ReactionCreateWithoutPageInput;
}
