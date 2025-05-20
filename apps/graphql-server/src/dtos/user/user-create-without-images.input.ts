import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefreshTokenCreateNestedManyWithoutUserInput } from '../refresh-token/refresh-token-create-nested-many-without-user.input';
import { ExitPageCreateNestedManyWithoutAuthorInput } from '../exit-page/exit-page-create-nested-many-without-author.input';
import { ReactionCreateNestedManyWithoutUserInput } from '../reaction/reaction-create-nested-many-without-user.input';
import { VoteCreateNestedManyWithoutUserInput } from '../vote/vote-create-nested-many-without-user.input';
import { CommentCreateNestedManyWithoutUserInput } from '../comment/comment-create-nested-many-without-user.input';
import { PageViewCreateNestedManyWithoutUserInput } from '../page-view/page-view-create-nested-many-without-user.input';
import { PageShareCreateNestedManyWithoutUserInput } from '../page-share/page-share-create-nested-many-without-user.input';
import { PageVersionCreateNestedManyWithoutUpdatedByInput } from '../page-version/page-version-create-nested-many-without-updated-by.input';
import { RoleCreateNestedManyWithoutUsersInput } from '../role/role-create-nested-many-without-users.input';
import { TemplateCreateNestedManyWithoutAuthorInput } from '../template/template-create-nested-many-without-author.input';

@InputType()
export class UserCreateWithoutImagesInput {

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

    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: RefreshTokenCreateNestedManyWithoutUserInput;

    @Field(() => ExitPageCreateNestedManyWithoutAuthorInput, {nullable:true})
    pages?: ExitPageCreateNestedManyWithoutAuthorInput;

    @Field(() => ReactionCreateNestedManyWithoutUserInput, {nullable:true})
    reactions?: ReactionCreateNestedManyWithoutUserInput;

    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: VoteCreateNestedManyWithoutUserInput;

    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutUserInput;

    @Field(() => PageViewCreateNestedManyWithoutUserInput, {nullable:true})
    views?: PageViewCreateNestedManyWithoutUserInput;

    @Field(() => PageShareCreateNestedManyWithoutUserInput, {nullable:true})
    shares?: PageShareCreateNestedManyWithoutUserInput;

    @Field(() => PageVersionCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    versions?: PageVersionCreateNestedManyWithoutUpdatedByInput;

    @Field(() => RoleCreateNestedManyWithoutUsersInput, {nullable:true})
    Role?: RoleCreateNestedManyWithoutUsersInput;

    @Field(() => TemplateCreateNestedManyWithoutAuthorInput, {nullable:true})
    Template?: TemplateCreateNestedManyWithoutAuthorInput;
}
