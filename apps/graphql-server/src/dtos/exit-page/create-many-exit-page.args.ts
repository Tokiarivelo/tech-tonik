import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExitPageCreateManyInput } from './exit-page-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyExitPageArgs {

    @Field(() => [ExitPageCreateManyInput], {nullable:false})
    @Type(() => ExitPageCreateManyInput)
    data!: Array<ExitPageCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
