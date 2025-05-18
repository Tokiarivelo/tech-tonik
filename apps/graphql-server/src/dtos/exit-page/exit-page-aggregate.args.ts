import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExitPageWhereInput } from './exit-page-where.input';
import { Type } from 'class-transformer';
import { ExitPageOrderByWithRelationInput } from './exit-page-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ExitPageCountAggregateInput } from './exit-page-count-aggregate.input';
import { ExitPageMinAggregateInput } from './exit-page-min-aggregate.input';
import { ExitPageMaxAggregateInput } from './exit-page-max-aggregate.input';

@ArgsType()
export class ExitPageAggregateArgs {

    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: ExitPageWhereInput;

    @Field(() => [ExitPageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ExitPageOrderByWithRelationInput>;

    @Field(() => ExitPageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ExitPageCountAggregateInput, {nullable:true})
    _count?: ExitPageCountAggregateInput;

    @Field(() => ExitPageMinAggregateInput, {nullable:true})
    _min?: ExitPageMinAggregateInput;

    @Field(() => ExitPageMaxAggregateInput, {nullable:true})
    _max?: ExitPageMaxAggregateInput;
}
