import { Controller, Get, Param } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './person.entity';

@Controller('owners')
export class PersonController {
  constructor(private readonly personService: PersonService) {}
  //localhost:3000/users
  @Get()
  async findAll(): Promise<Person[]> {
    return this.personService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.personService.findOne(+id);
  }
}
