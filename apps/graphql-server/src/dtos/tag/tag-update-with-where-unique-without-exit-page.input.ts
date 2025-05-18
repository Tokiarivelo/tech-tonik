import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagUpdateWithoutExitPageInput } from './tag-update-without-exit-page.input';

@InputType()
export class TagUpdateWithWhereUniqueWithoutExitPageInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;

    @Field(() => TagUpdateWithoutExitPageInput, {nullable:false})
    @Type(() => TagUpdateWithoutExitPageInput)
    data!: TagUpdateWithoutExitPageInput;
}
