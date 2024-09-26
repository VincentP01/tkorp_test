import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './animal.entity';
import { PersonService } from 'src/person/person.service';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private animalsRepository: Repository<Animal>,
    private personService: PersonService,
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

  async create(animalData: Partial<Animal>): Promise<Animal> {
    const owner = await this.personService.findOne(animalData.ownerId);
    if (!owner) {
      throw new Error("Le propriétaire spécifié n'existe pas");
    }
    const newAnimal = this.animalsRepository.create(animalData);
    return this.animalsRepository.save(newAnimal);
  }

  async update(id: number, updateData: Partial<Animal>): Promise<Animal> {
    const animal = await this.animalsRepository.findOneBy({ id });
    if (!animal) {
      throw new Error("L'animal spécifié n'existe pas");
    }
    await this.animalsRepository.update(id, updateData);
    return this.animalsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    const animal = await this.animalsRepository.findOneBy({ id });
    if (!animal) {
      throw new Error("L'animal spécifié n'existe pas");
    }
    await this.animalsRepository.delete(id);
  }
}
