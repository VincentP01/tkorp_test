import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';
import { Animal } from './animal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Animal])],
  controllers: [AnimalController],
  providers: [AnimalService],
})
export class AnimalModule {}
