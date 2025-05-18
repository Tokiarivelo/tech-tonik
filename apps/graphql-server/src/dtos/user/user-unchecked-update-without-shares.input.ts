import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RefreshTokenUncheckedUpdateManyWithoutUserNestedInput } from '../refresh-token/refresh-token-unchecked-update-many-without-user-nested.input';
import { UserImageUncheckedUpdateManyWithoutUserNestedInput } from '../user-image/user-image-unchecked-update-many-without-user-nested.input';
import { ExitPageUncheckedUpdateManyWithoutAuthorNestedInput } from '../exit-page/exit-page-unchecked-update-many-without-author-nested.input';
import { ReactionUncheckedUpdateManyWithoutUserNestedInput } from '../reaction/reaction-unchecked-update-many-without-user-nested.input';
import { VoteUncheckedUpdateManyWithoutUserNestedInput } from '../vote/vote-unchecked-update-many-without-user-nested.input';
import { CommentUncheckedUpdateManyWithoutUserNestedInput } from '../comment/comment-unchecked-update-many-without-user-nested.input';
import { PageViewUncheckedUpdateManyWithoutUserNestedInput } from '../page-view/page-view-unchecked-update-many-without-user-nested.input';
import { PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput } from '../page-version/page-version-unchecked-update-many-without-updated-by-nested.input';
import { RoleUncheckedUpdateManyWithoutUsersNestedInput } from '../role/role-unchecked-update-many-without-users-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutSharesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => UserImageUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: UserImageUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ExitPageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: ExitPageUncheckedUpdateManyWithoutAuthorNestedInput;

    @Field(() => ReactionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => PageViewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: PageViewUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: PageVersionUncheckedUpdateManyWithoutUpdatedByNestedInput;

    @Field(() => RoleUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: RoleUncheckedUpdateManyWithoutUsersNestedInput;
}
