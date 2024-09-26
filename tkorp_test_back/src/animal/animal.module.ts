import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';
import { Animal } from './animal.entity';
import { PersonService } from 'src/person/person.service';

@Module({
  imports: [TypeOrmModule.forFeature([Animal])],
  controllers: [AnimalController],
  providers: [AnimalService, PersonService],
})
export class AnimalModule {}
