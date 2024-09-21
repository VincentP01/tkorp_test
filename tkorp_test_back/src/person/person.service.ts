import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonService {
  getPersons() {
    return [
      {
        id: 1,
        firstName: 'Vincent',
      },
    ];
  }
}
