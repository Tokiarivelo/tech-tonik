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

      context: ({ req }: any) => ({ req }),
    }),
    UsersModule,
    AuthModule,
    UploadModule,
    TemplateModule,
    ExitPageModule,
  ],
})
export class AppModule {}
