import { Controller, Get, Param, Query } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './person.entity';

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
}
