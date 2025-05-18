import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageVersionCreateManyInput } from './page-version-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPageVersionArgs {

    @Field(() => [PageVersionCreateManyInput], {nullable:false})
    @Type(() => PageVersionCreateManyInput)
    data!: Array<PageVersionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
