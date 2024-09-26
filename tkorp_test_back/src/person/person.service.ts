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

  async findAll(
    page: number = 1,
  ): Promise<{ owners: Person[]; total: number }> {
    const take = 12;
    const skip = (page - 1) * take;

    const [owners, total] = await this.ownersRepository.findAndCount({
      skip,
      take,
    });

    return { owners, total };
  }

  findOne(id: number): Promise<Person> {
    return this.ownersRepository.findOne({
      where: { id },
      relations: ['animals'],
    });
  }
  create(personData: Partial<Person>): Promise<Person> {
    const newPerson = this.ownersRepository.create(personData);
    return this.ownersRepository.save(newPerson);
  }

  async update(id: number, updateData: Partial<Person>): Promise<Person> {
    await this.ownersRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.ownersRepository.delete(id);
  }
}
