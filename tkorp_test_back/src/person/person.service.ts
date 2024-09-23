import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private ownersRepository: Repository<Person>,
  ) {}

  findAll(): Promise<Person[]> {
    return this.ownersRepository.find();
  }

  findOne(id: number): Promise<Person> {
    return this.ownersRepository.findOneBy({ id });
  }
}
