import { Controller, Get, Param } from '@nestjs/common';
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

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.animalService.findOne(+id);
  }

  @Get('owner/:ownerId')
  async findByOwnerId(@Param('ownerId') ownerId: string): Promise<Animal[]> {
    return this.animalService.findByOwnerId(+ownerId);
  }
}
