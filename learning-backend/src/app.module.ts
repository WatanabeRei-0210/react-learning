import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ListenersModule } from './listeners/listeners.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ListenersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data/dev.sqlite',
      logging: true,
      entities: ['dist/**/entities/**/*.entity.js'],
      migrations: ['dist/**/migrations/**/*.js'],
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
