import { Controller, Get, Param, Query } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { Animal } from './animal.entity';

@Controller('animals')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}
  //localhost:3000/users
  @Get()
  async findAll(@Query('page') page: number = 1) {
    const { animals, total } = await this.animalService.findAll(page);
    return { animals, total };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    // Trouve l'animal par son ID
    const animal = await this.animalService.findOne(+id);

    // Si l'animal a un ownerId, récupère les informations du propriétaire
    if (animal && animal.ownerId) {
      const owner = await this.animalService.findOwnerNameByOwnerId(
        animal.ownerId,
      );
      return { ...animal, owner }; // Renvoie l'animal avec les détails du propriétaire
    }

    return animal;
  }
}
