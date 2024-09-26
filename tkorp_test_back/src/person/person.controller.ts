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
import { PersonService } from './person.service';
import { Person } from './person.entity';
import { PersonModule } from './person.module';

@Controller('owners')
export class PersonController {
  constructor(private readonly personService: PersonService) {}
  //localhost:3000/users
  @Get()
  async findAll(@Query('page') page: number = 1) {
    const { owners, total } = await this.personService.findAll(page);
    return { owners, total };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.personService.findOne(+id);
  }
  @Post()
  async create(@Body() personData: Partial<Person>): Promise<Person> {
    return this.personService.create(personData);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateData: Partial<Person>,
  ): Promise<Person> {
    const existingOwner = await this.personService.findOne(+id);
    if (!existingOwner) {
      throw new Error("Le propriétaire spécifié n'existe pas");
    }
    return this.personService.update(+id, updateData);
  }

  @Delete(':id')
  async removeEventListener(@Param('id') id: string): Promise<void> {
    const existingOwner = await this.personService.findOne(+id);
    if (!existingOwner) {
      throw new Error("Le propriétaire spécifié n'existe pas");
    }

    return this.personService.remove(+id);
  }
}
