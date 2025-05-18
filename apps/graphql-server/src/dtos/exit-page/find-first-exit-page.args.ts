import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExitPageWhereInput } from './exit-page-where.input';
import { Type } from 'class-transformer';
import { ExitPageOrderByWithRelationInput } from './exit-page-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ExitPageScalarFieldEnum } from './exit-page-scalar-field.enum';

@ArgsType()
export class FindFirstExitPageArgs {

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

    @Field(() => [ExitPageScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ExitPageScalarFieldEnum}`>;
}
