import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageViewWhereInput } from './page-view-where.input';
import { Type } from 'class-transformer';
import { PageViewOrderByWithRelationInput } from './page-view-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PageViewWhereUniqueInput } from './page-view-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PageViewScalarFieldEnum } from './page-view-scalar-field.enum';

@ArgsType()
export class FindManyPageViewArgs {

    @Field(() => PageViewWhereInput, {nullable:true})
    @Type(() => PageViewWhereInput)
    where?: PageViewWhereInput;

    @Field(() => [PageViewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageViewOrderByWithRelationInput>;

    @Field(() => PageViewWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PageViewWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PageViewScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PageViewScalarFieldEnum}`>;
}
