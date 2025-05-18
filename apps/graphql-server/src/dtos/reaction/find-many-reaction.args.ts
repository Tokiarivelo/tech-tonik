import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReactionWhereInput } from './reaction-where.input';
import { Type } from 'class-transformer';
import { ReactionOrderByWithRelationInput } from './reaction-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ReactionWhereUniqueInput } from './reaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReactionScalarFieldEnum } from './reaction-scalar-field.enum';

@ArgsType()
export class FindManyReactionArgs {

    @Field(() => ReactionWhereInput, {nullable:true})
    @Type(() => ReactionWhereInput)
    where?: ReactionWhereInput;

    @Field(() => [ReactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReactionOrderByWithRelationInput>;

    @Field(() => ReactionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReactionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReactionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ReactionScalarFieldEnum}`>;
}
