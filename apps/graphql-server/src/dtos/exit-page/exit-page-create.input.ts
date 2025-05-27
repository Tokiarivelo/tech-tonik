import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload-ts';
import { ExitPageCreateInput } from '../@generated';

@InputType()
export class ExitPageCreateInputArgs extends ExitPageCreateInput {
  @Field(() => String)
  openingLine: string;

  @Field(() => [String], { nullable: true })
  gifUrls?: string[];

  @Field(() => [GraphQLUpload], { nullable: true })
  images?: Promise<FileUpload>[];

  @Field(() => [GraphQLUpload], { nullable: true })
  videos?: Promise<FileUpload>[];

  @Field(() => [GraphQLUpload], { nullable: true })
  audios?: Promise<FileUpload>[];

  @Field(() => String)
  reactionDefault: string;
}
