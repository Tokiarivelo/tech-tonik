import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyPageInput } from './comment-create-many-page.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateManyPageInputEnvelope {

    @Field(() => [CommentCreateManyPageInput], {nullable:false})
    @Type(() => CommentCreateManyPageInput)
    data!: Array<CommentCreateManyPageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
