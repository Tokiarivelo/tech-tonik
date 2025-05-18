import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ReactionType } from '../prisma/reaction-type.enum';
import { ExitPage } from '../exit-page/exit-page.model';
import { User } from '../user/user.model';

@ObjectType()
export class Reaction {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    pageId!: string;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => ReactionType, {nullable:false})
    type!: `${ReactionType}`;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => ExitPage, {nullable:false})
    page?: ExitPage;

    @Field(() => User, {nullable:true})
    user?: User | null;
}
