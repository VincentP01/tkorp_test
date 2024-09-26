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

  async findAll(
    page: number = 1,
  ): Promise<{ animals: Animal[]; total: number }> {
    const take = 12;
    const skip = (page - 1) * take;

    const [animals, total] = await this.animalsRepository.findAndCount({
      skip,
      take,
    });

    return { animals, total };
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
