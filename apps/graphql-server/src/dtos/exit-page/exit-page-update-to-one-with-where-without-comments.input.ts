import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageWhereInput } from './exit-page-where.input';
import { Type } from 'class-transformer';
import { ExitPageUpdateWithoutCommentsInput } from './exit-page-update-without-comments.input';

@InputType()
export class ExitPageUpdateToOneWithWhereWithoutCommentsInput {

    @Field(() => ExitPageWhereInput, {nullable:true})
    @Type(() => ExitPageWhereInput)
    where?: ExitPageWhereInput;

    @Field(() => ExitPageUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => ExitPageUpdateWithoutCommentsInput)
    data!: ExitPageUpdateWithoutCommentsInput;
}
