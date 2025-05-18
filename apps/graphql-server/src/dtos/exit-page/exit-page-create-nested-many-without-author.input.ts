import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateWithoutAuthorInput } from './exit-page-create-without-author.input';
import { Type } from 'class-transformer';
import { ExitPageCreateOrConnectWithoutAuthorInput } from './exit-page-create-or-connect-without-author.input';
import { ExitPageCreateManyAuthorInputEnvelope } from './exit-page-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ExitPageWhereUniqueInput } from './exit-page-where-unique.input';

@InputType()
export class ExitPageCreateNestedManyWithoutAuthorInput {

    @Field(() => [ExitPageCreateWithoutAuthorInput], {nullable:true})
    @Type(() => ExitPageCreateWithoutAuthorInput)
    create?: Array<ExitPageCreateWithoutAuthorInput>;

    @Field(() => [ExitPageCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => ExitPageCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<ExitPageCreateOrConnectWithoutAuthorInput>;

    @Field(() => ExitPageCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => ExitPageCreateManyAuthorInputEnvelope)
    createMany?: ExitPageCreateManyAuthorInputEnvelope;

    @Field(() => [ExitPageWhereUniqueInput], {nullable:true})
    @Type(() => ExitPageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExitPageWhereUniqueInput, 'id' | 'slug'>>;
}
