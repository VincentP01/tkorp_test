import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';
import { Animal } from './animal.entity';
import { PersonModule } from 'src/person/person.module';

@Module({
  imports: [TypeOrmModule.forFeature([Animal]), PersonModule],
  controllers: [AnimalController],
  providers: [AnimalService],
})
export class AnimalModule {}
