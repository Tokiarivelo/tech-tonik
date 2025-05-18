import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ExitPageCreateNestedOneWithoutVersionsInput } from '../exit-page/exit-page-create-nested-one-without-versions.input';
import { UserCreateNestedOneWithoutVersionsInput } from '../user/user-create-nested-one-without-versions.input';

@InputType()
export class PageVersionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    version!: number;

    @Field(() => GraphQLJSON, {nullable:false})
    data!: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ExitPageCreateNestedOneWithoutVersionsInput, {nullable:false})
    page!: ExitPageCreateNestedOneWithoutVersionsInput;

    @Field(() => UserCreateNestedOneWithoutVersionsInput, {nullable:true})
    updatedBy?: UserCreateNestedOneWithoutVersionsInput;
}
