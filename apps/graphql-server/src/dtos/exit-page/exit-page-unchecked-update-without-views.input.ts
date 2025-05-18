import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumToneFieldUpdateOperationsInput } from '../prisma/enum-tone-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ReactionUncheckedUpdateManyWithoutPageNestedInput } from '../reaction/reaction-unchecked-update-many-without-page-nested.input';
import { VoteUncheckedUpdateManyWithoutPageNestedInput } from '../vote/vote-unchecked-update-many-without-page-nested.input';
import { CommentUncheckedUpdateManyWithoutPageNestedInput } from '../comment/comment-unchecked-update-many-without-page-nested.input';
import { PageShareUncheckedUpdateManyWithoutPageNestedInput } from '../page-share/page-share-unchecked-update-many-without-page-nested.input';
import { PageVersionUncheckedUpdateManyWithoutPageNestedInput } from '../page-version/page-version-unchecked-update-many-without-page-nested.input';
import { TagUncheckedUpdateManyWithoutExitPageNestedInput } from '../tag/tag-unchecked-update-many-without-exit-page-nested.input';

@InputType()
export class ExitPageUncheckedUpdateWithoutViewsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumToneFieldUpdateOperationsInput, {nullable:true})
    tone?: EnumToneFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    templateId?: StringFieldUpdateOperationsInput;

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

    @Field(() => ReactionUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    reactions?: ReactionUncheckedUpdateManyWithoutPageNestedInput;

    @Field(() => VoteUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    votes?: VoteUncheckedUpdateManyWithoutPageNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutPageNestedInput;

    @Field(() => PageShareUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    shares?: PageShareUncheckedUpdateManyWithoutPageNestedInput;

    @Field(() => PageVersionUncheckedUpdateManyWithoutPageNestedInput, {nullable:true})
    versions?: PageVersionUncheckedUpdateManyWithoutPageNestedInput;

    @Field(() => TagUncheckedUpdateManyWithoutExitPageNestedInput, {nullable:true})
    tags?: TagUncheckedUpdateManyWithoutExitPageNestedInput;
}
