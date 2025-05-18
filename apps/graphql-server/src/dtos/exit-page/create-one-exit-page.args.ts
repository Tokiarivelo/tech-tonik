import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExitPageCreateInput } from './exit-page-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneExitPageArgs {

    @Field(() => ExitPageCreateInput, {nullable:false})
    @Type(() => ExitPageCreateInput)
    data!: ExitPageCreateInput;
}
