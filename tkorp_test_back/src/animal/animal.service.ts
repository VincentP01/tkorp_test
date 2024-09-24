import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './animal.entity';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private animalsRepository: Repository<Animal>,
  ) {}

  findAll(): Promise<Animal[]> {
    return this.animalsRepository.find();
  }

  findOne(id: number): Promise<Animal> {
    return this.animalsRepository.findOneBy({ id });
  }

  async findByOwnerId(ownerId: number): Promise<Animal[]> {
    return this.animalsRepository.find({
      where: { ownerId },
      relations: ['owner'],
    });
  }
}
