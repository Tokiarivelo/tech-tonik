import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PageShareWhereUniqueInput } from './page-share-where-unique.input';
import { Type } from 'class-transformer';
import { PageShareCreateWithoutUserInput } from './page-share-create-without-user.input';

@InputType()
export class PageShareCreateOrConnectWithoutUserInput {

    @Field(() => PageShareWhereUniqueInput, {nullable:false})
    @Type(() => PageShareWhereUniqueInput)
    where!: Prisma.AtLeast<PageShareWhereUniqueInput, 'id'>;

    @Field(() => PageShareCreateWithoutUserInput, {nullable:false})
    @Type(() => PageShareCreateWithoutUserInput)
    create!: PageShareCreateWithoutUserInput;
}
