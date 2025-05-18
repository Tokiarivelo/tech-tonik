import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumToneFilter } from '../prisma/enum-tone-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { Type } from 'class-transformer';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ExitPageScalarWhereInput {

    @Field(() => [ExitPageScalarWhereInput], {nullable:true})
    AND?: Array<ExitPageScalarWhereInput>;

    @Field(() => [ExitPageScalarWhereInput], {nullable:true})
    OR?: Array<ExitPageScalarWhereInput>;

    @Field(() => [ExitPageScalarWhereInput], {nullable:true})
    NOT?: Array<ExitPageScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    authorId?: StringNullableFilter;

    @Field(() => EnumToneFilter, {nullable:true})
    tone?: EnumToneFilter;

    @Field(() => StringFilter, {nullable:true})
    templateId?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    @Type(() => JsonFilter)
    data?: JsonFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isHallOfFame?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
