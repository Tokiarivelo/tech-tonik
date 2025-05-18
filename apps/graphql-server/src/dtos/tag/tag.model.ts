import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ExitPage } from '../exit-page/exit-page.model';
import { TagCount } from './tag-count.output';

@ObjectType()
export class Tag {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    pageId!: string;

    @Field(() => [ExitPage], {nullable:true})
    ExitPage?: Array<ExitPage>;

    @Field(() => TagCount, {nullable:false})
    _count?: TagCount;
}
