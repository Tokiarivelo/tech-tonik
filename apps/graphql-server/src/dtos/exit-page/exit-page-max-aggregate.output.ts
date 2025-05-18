import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Tone } from '../prisma/tone.enum';

@ObjectType()
export class ExitPageMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    authorId?: string;

    @Field(() => Tone, {nullable:true})
    tone?: `${Tone}`;

    @Field(() => String, {nullable:true})
    templateId?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => Boolean, {nullable:true})
    isHallOfFame?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
