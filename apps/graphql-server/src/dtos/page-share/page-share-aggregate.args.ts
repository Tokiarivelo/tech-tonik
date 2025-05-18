import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageShareWhereInput } from './page-share-where.input';
import { Type } from 'class-transformer';
import { PageShareOrderByWithRelationInput } from './page-share-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PageShareWhereUniqueInput } from './page-share-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PageShareCountAggregateInput } from './page-share-count-aggregate.input';
import { PageShareMinAggregateInput } from './page-share-min-aggregate.input';
import { PageShareMaxAggregateInput } from './page-share-max-aggregate.input';

@ArgsType()
export class PageShareAggregateArgs {

    @Field(() => PageShareWhereInput, {nullable:true})
    @Type(() => PageShareWhereInput)
    where?: PageShareWhereInput;

    @Field(() => [PageShareOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageShareOrderByWithRelationInput>;

    @Field(() => PageShareWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PageShareCountAggregateInput, {nullable:true})
    _count?: PageShareCountAggregateInput;

    @Field(() => PageShareMinAggregateInput, {nullable:true})
    _min?: PageShareMinAggregateInput;

    @Field(() => PageShareMaxAggregateInput, {nullable:true})
    _max?: PageShareMaxAggregateInput;
}
