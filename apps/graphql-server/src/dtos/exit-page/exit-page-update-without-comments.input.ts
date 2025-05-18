import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumToneFieldUpdateOperationsInput } from '../prisma/enum-tone-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneWithoutPagesNestedInput } from '../user/user-update-one-without-pages-nested.input';
import { TemplateUpdateOneRequiredWithoutPagesNestedInput } from '../template/template-update-one-required-without-pages-nested.input';
import { ReactionUpdateManyWithoutPageNestedInput } from '../reaction/reaction-update-many-without-page-nested.input';
import { VoteUpdateManyWithoutPageNestedInput } from '../vote/vote-update-many-without-page-nested.input';
import { PageViewUpdateManyWithoutPageNestedInput } from '../page-view/page-view-update-many-without-page-nested.input';
import { PageShareUpdateManyWithoutPageNestedInput } from '../page-share/page-share-update-many-without-page-nested.input';
import { PageVersionUpdateManyWithoutPageNestedInput } from '../page-version/page-version-update-many-without-page-nested.input';
import { TagUpdateManyWithoutExitPageNestedInput } from '../tag/tag-update-many-without-exit-page-nested.input';

@InputType()
export class ExitPageUpdateWithoutCommentsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: EnumToneFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isHallOfFame?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutPagesNestedInput, {nullable:true})
    author?: UserUpdateOneWithoutPagesNestedInput;

    @Field(() => TemplateUpdateOneRequiredWithoutPagesNestedInput, {nullable:true})
    template?: TemplateUpdateOneRequiredWithoutPagesNestedInput;

    @Field(() => ReactionUpdateManyWithoutPageNestedInput, {nullable:true})
    reactions?: ReactionUpdateManyWithoutPageNestedInput;

    @Field(() => VoteUpdateManyWithoutPageNestedInput, {nullable:true})
    votes?: VoteUpdateManyWithoutPageNestedInput;

    @Field(() => PageViewUpdateManyWithoutPageNestedInput, {nullable:true})
    views?: PageViewUpdateManyWithoutPageNestedInput;

    @Field(() => PageShareUpdateManyWithoutPageNestedInput, {nullable:true})
    shares?: PageShareUpdateManyWithoutPageNestedInput;

    @Field(() => PageVersionUpdateManyWithoutPageNestedInput, {nullable:true})
    versions?: PageVersionUpdateManyWithoutPageNestedInput;

    @Field(() => TagUpdateManyWithoutExitPageNestedInput, {nullable:true})
    tags?: TagUpdateManyWithoutExitPageNestedInput;
}
