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

  findAll(page: number = 1): Promise<Person[]> {
    const take = 15;
    const skip = (page - 1) * take;
    return this.ownersRepository.find({ skip, take });
  }

  findOne(id: number): Promise<Person> {
    return this.ownersRepository.findOne({
      where: { id },
      relations: ['animals'],
    });
  }
}
