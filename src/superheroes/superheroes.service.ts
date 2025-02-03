import { Injectable } from '@nestjs/common';
import { database } from 'src/common/db';
import { sortByHumility } from 'src/utils/sortByHumility';

@Injectable()
export class SuperheroesService {
  async getSuperheroes() {
    return sortByHumility(database);
  }
}
