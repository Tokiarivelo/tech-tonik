import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ExitPageListRelationFilter } from '../exit-page/exit-page-list-relation-filter.input';

@InputType()
export class TemplateWhereInput {

    @Field(() => [TemplateWhereInput], {nullable:true})
    AND?: Array<TemplateWhereInput>;

    @Field(() => [TemplateWhereInput], {nullable:true})
    OR?: Array<TemplateWhereInput>;

    @Field(() => [TemplateWhereInput], {nullable:true})
    NOT?: Array<TemplateWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    placeholders?: JsonFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    uniqueKey?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => ExitPageListRelationFilter, {nullable:true})
    pages?: ExitPageListRelationFilter;
}
