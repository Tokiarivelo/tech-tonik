import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateNestedManyWithoutTagsInput } from '../exit-page/exit-page-create-nested-many-without-tags.input';

@InputType()
export class TagCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    pageId!: string;

    @Field(() => ExitPageCreateNestedManyWithoutTagsInput, {nullable:true})
    ExitPage?: ExitPageCreateNestedManyWithoutTagsInput;
}
