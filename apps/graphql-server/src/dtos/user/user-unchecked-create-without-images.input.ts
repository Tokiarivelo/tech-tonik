import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefreshTokenUncheckedCreateNestedManyWithoutUserInput } from '../refresh-token/refresh-token-unchecked-create-nested-many-without-user.input';
import { ExitPageUncheckedCreateNestedManyWithoutAuthorInput } from '../exit-page/exit-page-unchecked-create-nested-many-without-author.input';
import { ReactionUncheckedCreateNestedManyWithoutUserInput } from '../reaction/reaction-unchecked-create-nested-many-without-user.input';
import { VoteUncheckedCreateNestedManyWithoutUserInput } from '../vote/vote-unchecked-create-nested-many-without-user.input';
import { CommentUncheckedCreateNestedManyWithoutUserInput } from '../comment/comment-unchecked-create-nested-many-without-user.input';
import { PageViewUncheckedCreateNestedManyWithoutUserInput } from '../page-view/page-view-unchecked-create-nested-many-without-user.input';
import { PageShareUncheckedCreateNestedManyWithoutUserInput } from '../page-share/page-share-unchecked-create-nested-many-without-user.input';
import { PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput } from '../page-version/page-version-unchecked-create-nested-many-without-updated-by.input';
import { RoleUncheckedCreateNestedManyWithoutUsersInput } from '../role/role-unchecked-create-nested-many-without-users.input';

@InputType()
export class UserUncheckedCreateWithoutImagesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ExitPageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: ExitPageUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => ReactionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => PageViewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    views?: PageViewUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => PageShareUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: PageShareUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: PageVersionUncheckedCreateNestedManyWithoutUpdatedByInput;

    @Field(() => RoleUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: RoleUncheckedCreateNestedManyWithoutUsersInput;
}
