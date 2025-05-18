import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageUncheckedCreateNestedManyWithoutTagsInput } from '../exit-page/exit-page-unchecked-create-nested-many-without-tags.input';

@InputType()
export class TagUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    pageId!: string;

    @Field(() => ExitPageUncheckedCreateNestedManyWithoutTagsInput, {nullable:true})
    ExitPage?: ExitPageUncheckedCreateNestedManyWithoutTagsInput;
}
