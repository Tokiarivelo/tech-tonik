import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageUpdateWithoutCommentsInput } from './exit-page-update-without-comments.input';
import { Type } from 'class-transformer';
import { ExitPageCreateWithoutCommentsInput } from './exit-page-create-without-comments.input';
import { ExitPageWhereInput } from './exit-page-where.input';

@InputType()
export class ExitPageUpsertWithoutCommentsInput {

    @Field(() => ExitPageUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutCommentsInput)
    update!: ExitPageUpdateWithoutCommentsInput;

    @Field(() => ExitPageCreateWithoutCommentsInput, {nullable:false})
    @Type(() => ExitPageCreateWithoutCommentsInput)
    create!: ExitPageCreateWithoutCommentsInput;

    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: ExitPageWhereInput;
}
