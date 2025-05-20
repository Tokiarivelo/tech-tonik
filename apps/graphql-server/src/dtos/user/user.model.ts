import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { RefreshToken } from '../refresh-token/refresh-token.model';
import { UserImage } from '../user-image/user-image.model';
import { ExitPage } from '../exit-page/exit-page.model';
import { Reaction } from '../reaction/reaction.model';
import { Vote } from '../vote/vote.model';
import { Comment } from '../comment/comment.model';
import { PageView } from '../page-view/page-view.model';
import { PageShare } from '../page-share/page-share.model';
import { PageVersion } from '../page-version/page-version.model';
import { Role } from '../role/role.model';
import { Template } from '../template/template.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:true})
    lastName!: string | null;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    isVerified!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [RefreshToken], {nullable:true})
    tokens?: Array<RefreshToken>;

    @Field(() => [UserImage], {nullable:true})
    images?: Array<UserImage>;

    @Field(() => [ExitPage], {nullable:true})
    pages?: Array<ExitPage>;

    @Field(() => [Reaction], {nullable:true})
    reactions?: Array<Reaction>;

    @Field(() => [Vote], {nullable:true})
    votes?: Array<Vote>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [PageView], {nullable:true})
    views?: Array<PageView>;

    @Field(() => [PageShare], {nullable:true})
    shares?: Array<PageShare>;

    @Field(() => [PageVersion], {nullable:true})
    versions?: Array<PageVersion>;

    @Field(() => [Role], {nullable:true})
    Role?: Array<Role>;

    @Field(() => [Template], {nullable:true})
    Template?: Array<Template>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
