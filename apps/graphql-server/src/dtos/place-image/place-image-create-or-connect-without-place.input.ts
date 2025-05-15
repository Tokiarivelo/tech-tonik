import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlaceImageWhereUniqueInput } from './place-image-where-unique.input';
import { Type } from 'class-transformer';
import { PlaceImageCreateWithoutPlaceInput } from './place-image-create-without-place.input';

@InputType()
export class PlaceImageCreateOrConnectWithoutPlaceInput {

    @Field(() => PlaceImageWhereUniqueInput, {nullable:false})
    @Type(() => PlaceImageWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceImageWhereUniqueInput, 'id'>;

    @Field(() => PlaceImageCreateWithoutPlaceInput, {nullable:false})
    @Type(() => PlaceImageCreateWithoutPlaceInput)
    create!: PlaceImageCreateWithoutPlaceInput;
}
