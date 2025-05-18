import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReactionType } from '../prisma/reaction-type.enum';

@ObjectType()
export class ReactionMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    pageId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => ReactionType, {nullable:true})
    type?: `${ReactionType}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
