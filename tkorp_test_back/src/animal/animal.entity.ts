import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Person } from '../person/person.entity';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  species: string;

  @Column()
  breed: string;

  @Column()
  color: string;

  @Column()
  weight: number;

  @Column()
  ownerId: number;

  /**  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  dateOfBirth DATE NOT NULL,
  species VARCHAR(100) NOT null,
  breed text,
  color varchar(50),
  weight int,
  ownerId int,
 */
  @ManyToOne(() => Person, (person) => person.animals)
  owner: Person;
}
