import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { Type } from 'class-transformer';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ExitPageScalarRelationFilter } from '../exit-page/exit-page-scalar-relation-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';

@InputType()
export class PageVersionWhereInput {

    @Field(() => [PageVersionWhereInput], {nullable:true})
    AND?: Array<PageVersionWhereInput>;

    @Field(() => [PageVersionWhereInput], {nullable:true})
    OR?: Array<PageVersionWhereInput>;

    @Field(() => [PageVersionWhereInput], {nullable:true})
    NOT?: Array<PageVersionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    pageId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    version?: IntFilter;

    @Field(() => JsonFilter, {nullable:true})
    @Type(() => JsonFilter)
    data?: JsonFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updatedById?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => ExitPageScalarRelationFilter, {nullable:true})
    page?: ExitPageScalarRelationFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    updatedBy?: UserNullableScalarRelationFilter;
}
