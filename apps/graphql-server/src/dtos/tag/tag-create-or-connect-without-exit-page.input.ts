import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagCreateWithoutExitPageInput } from './tag-create-without-exit-page.input';

@InputType()
export class TagCreateOrConnectWithoutExitPageInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;

    @Field(() => TagCreateWithoutExitPageInput, {nullable:false})
    @Type(() => TagCreateWithoutExitPageInput)
    create!: TagCreateWithoutExitPageInput;
}
