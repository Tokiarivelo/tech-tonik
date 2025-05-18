import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ExitPage } from '../exit-page/exit-page.model';
import { User } from '../user/user.model';

@ObjectType()
export class PageVersion {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    pageId!: string;

    @Field(() => Int, {nullable:false})
    version!: number;

    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;

    @Field(() => String, {nullable:true})
    updatedById!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => ExitPage, {nullable:false})
    page?: ExitPage;

    @Field(() => User, {nullable:true})
    updatedBy?: User | null;
}
