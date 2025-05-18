import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageVersionWhereInput } from './page-version-where.input';
import { Type } from 'class-transformer';
import { PageVersionOrderByWithRelationInput } from './page-version-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PageVersionWhereUniqueInput } from './page-version-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PageVersionScalarFieldEnum } from './page-version-scalar-field.enum';

@ArgsType()
export class FindFirstPageVersionArgs {

    @Field(() => PageVersionWhereInput, {nullable:true})
    @Type(() => PageVersionWhereInput)
    where?: PageVersionWhereInput;

    @Field(() => [PageVersionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageVersionOrderByWithRelationInput>;

    @Field(() => PageVersionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PageVersionWhereUniqueInput, 'id' | 'one_version_per_page'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PageVersionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PageVersionScalarFieldEnum}`>;
}
