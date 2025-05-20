import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TemplateNo_duplicate_key_per_userCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    uniqueKey!: string;

    @Field(() => String, {nullable:false})
    authorId!: string;
}
