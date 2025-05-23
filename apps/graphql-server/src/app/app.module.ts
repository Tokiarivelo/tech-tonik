import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from '../user/user.module';
import { AuthModule } from 'src/auth/auth.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { UploadModule } from 'src/upload/upload.module';
import { TemplateModule } from 'src/template/template.module';
import { ExitPageModule } from 'src/exit-page/exitPage.module';
import { ReactionModule } from 'src/reaction/reaction.module';
import { VoteModule } from 'src/vote/vote.module';
import { CommentModule } from 'src/comment/comment.module';
import { PageVersionModule } from 'src/page-version/page-version.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      installSubscriptionHandlers: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      subscriptions: {
        'graphql-ws': true,
      },

      context: ({ req, res }: any) => ({ req, res }),
    }),
    UsersModule,
    AuthModule,
    UploadModule,
    TemplateModule,
    ExitPageModule,
    ReactionModule,
    VoteModule,
    CommentModule,
    PageVersionModule,
  ],
})
export class AppModule {}
