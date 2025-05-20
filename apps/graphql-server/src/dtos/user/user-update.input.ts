import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RefreshTokenUpdateManyWithoutUserNestedInput } from '../refresh-token/refresh-token-update-many-without-user-nested.input';
import { UserImageUpdateManyWithoutUserNestedInput } from '../user-image/user-image-update-many-without-user-nested.input';
import { ExitPageUpdateManyWithoutAuthorNestedInput } from '../exit-page/exit-page-update-many-without-author-nested.input';
import { ReactionUpdateManyWithoutUserNestedInput } from '../reaction/reaction-update-many-without-user-nested.input';
import { VoteUpdateManyWithoutUserNestedInput } from '../vote/vote-update-many-without-user-nested.input';
import { CommentUpdateManyWithoutUserNestedInput } from '../comment/comment-update-many-without-user-nested.input';
import { PageViewUpdateManyWithoutUserNestedInput } from '../page-view/page-view-update-many-without-user-nested.input';
import { PageShareUpdateManyWithoutUserNestedInput } from '../page-share/page-share-update-many-without-user-nested.input';
import { PageVersionUpdateManyWithoutUpdatedByNestedInput } from '../page-version/page-version-update-many-without-updated-by-nested.input';
import { RoleUpdateManyWithoutUsersNestedInput } from '../role/role-update-many-without-users-nested.input';
import { TemplateUpdateManyWithoutAuthorNestedInput } from '../template/template-update-many-without-author-nested.input';

@InputType()
export class UserUpdateInput {

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

    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    tokens?: RefreshTokenUpdateManyWithoutUserNestedInput;

    @Field(() => UserImageUpdateManyWithoutUserNestedInput, {nullable:true})
    images?: UserImageUpdateManyWithoutUserNestedInput;

    @Field(() => ExitPageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    pages?: ExitPageUpdateManyWithoutAuthorNestedInput;

    @Field(() => ReactionUpdateManyWithoutUserNestedInput, {nullable:true})
    reactions?: ReactionUpdateManyWithoutUserNestedInput;

    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: VoteUpdateManyWithoutUserNestedInput;

    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutUserNestedInput;

    @Field(() => PageViewUpdateManyWithoutUserNestedInput, {nullable:true})
    views?: PageViewUpdateManyWithoutUserNestedInput;

    @Field(() => PageShareUpdateManyWithoutUserNestedInput, {nullable:true})
    shares?: PageShareUpdateManyWithoutUserNestedInput;

    @Field(() => PageVersionUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    versions?: PageVersionUpdateManyWithoutUpdatedByNestedInput;

    @Field(() => RoleUpdateManyWithoutUsersNestedInput, {nullable:true})
    Role?: RoleUpdateManyWithoutUsersNestedInput;

    @Field(() => TemplateUpdateManyWithoutAuthorNestedInput, {nullable:true})
    Template?: TemplateUpdateManyWithoutAuthorNestedInput;
}
