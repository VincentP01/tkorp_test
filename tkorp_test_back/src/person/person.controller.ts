import { Controller, Get } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './person.entity';

@Controller('persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}
  //localhost:3000/users
  @Get()
  async findAll(): Promise<Person[]> {
    return this.personService.findAll();
  }
}
