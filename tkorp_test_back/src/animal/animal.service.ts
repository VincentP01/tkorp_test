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

  findOwnerNameByOwnerId(
    ownerId: number,
  ): Promise<{ firstName: string; lastName: string } | null> {
    return this.animalsRepository
      .findOne({
        where: { ownerId },
        relations: ['owner'],
      })
      .then((animal) => {
        if (animal && animal.owner) {
          return {
            id: animal.owner.id,
            firstName: animal.owner.firstName,
            lastName: animal.owner.lastName,
          };
        }
        return null;
      });
  }
}
