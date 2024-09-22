import { Controller, Get } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { Animal } from './animal.entity';

@Controller('animals')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}
  //localhost:3000/users
  @Get()
  async findAll(): Promise<Animal[]> {
    return this.animalService.findAll();
  }
}
