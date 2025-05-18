import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageShareWhereInput } from './page-share-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ExitPageScalarRelationFilter } from '../exit-page/exit-page-scalar-relation-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';

@InputType()
export class PageShareWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [PageShareWhereInput], {nullable:true})
    AND?: Array<PageShareWhereInput>;

    @Field(() => [PageShareWhereInput], {nullable:true})
    OR?: Array<PageShareWhereInput>;

    @Field(() => [PageShareWhereInput], {nullable:true})
    NOT?: Array<PageShareWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    pageId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    platform?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => ExitPageScalarRelationFilter, {nullable:true})
    page?: ExitPageScalarRelationFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: UserNullableScalarRelationFilter;
}
