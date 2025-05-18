import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PageVersionOne_version_per_pageCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    pageId!: string;

    @Field(() => Int, {nullable:false})
    version!: number;
}
