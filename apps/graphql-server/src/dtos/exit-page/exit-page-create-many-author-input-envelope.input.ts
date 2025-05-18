import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExitPageCreateManyAuthorInput } from './exit-page-create-many-author.input';
import { Type } from 'class-transformer';

@InputType()
export class ExitPageCreateManyAuthorInputEnvelope {

    @Field(() => [ExitPageCreateManyAuthorInput], {nullable:false})
    @Type(() => ExitPageCreateManyAuthorInput)
    data!: Array<ExitPageCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
