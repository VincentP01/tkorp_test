import { Controller, Get } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller('perons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}
  //localhost:8000/users
  @Get()
  getPersons() {
    return this.personService.getPersons();
  }
}
