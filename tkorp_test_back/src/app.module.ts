import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './person/person.module';
import { AnimalModule } from './animal/animal.module';
import { Animal } from './animal/animal.entity';
import { Person } from './person/person.entity';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: +process.env.PORT_DB,
      username: process.env.USERNAME_DB,
      password: process.env.PASSWORD,
      database: process.env.DB_NAME,
      entities: [Person, Animal],
      synchronize: false,
      logging: true,
    }),
    PersonModule,
    AnimalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
