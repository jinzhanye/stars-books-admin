import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    BooksModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      // 关闭原来的 playground，使用 https://studio.apollographql.com/sandbox/explorer
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault],
    }),
  ],
})
export class AppModule {}
