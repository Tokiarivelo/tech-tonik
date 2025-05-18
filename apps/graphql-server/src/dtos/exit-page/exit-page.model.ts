import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Tone } from '../prisma/tone.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { User } from '../user/user.model';
import { Template } from '../template/template.model';
import { Reaction } from '../reaction/reaction.model';
import { Vote } from '../vote/vote.model';
import { Comment } from '../comment/comment.model';
import { PageView } from '../page-view/page-view.model';
import { PageShare } from '../page-share/page-share.model';
import { PageVersion } from '../page-version/page-version.model';
import { Tag } from '../tag/tag.model';
import { ExitPageCount } from './exit-page-count.output';

@ObjectType()
export class ExitPage {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    authorId!: string | null;

    @Field(() => Tone, {nullable:false})
    tone!: `${Tone}`;

    @Field(() => String, {nullable:false})
    templateId!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    isHallOfFame!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:true})
    author?: User | null;

    @Field(() => Template, {nullable:false})
    template?: Template;

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

    @Field(() => [Tag], {nullable:true})
    tags?: Array<Tag>;

    @Field(() => ExitPageCount, {nullable:false})
    _count?: ExitPageCount;
}
