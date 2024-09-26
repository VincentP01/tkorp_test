import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { AnimalService } from './animal.service';
import { Animal } from './animal.entity';
import { PersonService } from 'src/person/person.service';

@Controller('animals')
export class AnimalController {
  constructor(
    private readonly animalService: AnimalService,
    private readonly personService: PersonService,
  ) {}
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

  @Post()
  async create(@Body() animalData: Partial<Animal>): Promise<Animal> {
    const owner = await this.personService.findOne(animalData.ownerId);
    if (!owner) {
      throw new Error("Le propriétaire spécifié n'existe pas");
    }
    return this.animalService.create(animalData);
  }
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateData: Partial<Animal>,
  ): Promise<Animal> {
    if (updateData.ownerId) {
      const owner = await this.personService.findOne(updateData.ownerId);
      if (!owner) {
        throw new Error("Le propriétaire spécifié n'existe pas");
      }
    }
    return this.animalService.update(+id, updateData);
  }
  @Delete('id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.animalService.remove(+id);
  }
}
