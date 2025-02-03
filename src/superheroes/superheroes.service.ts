import { Injectable } from '@nestjs/common';
import { database } from 'src/common/db';
import { sortByHumility } from 'src/utils/sortByHumility';
import { CreateSuperheroDto } from './dto/createSuperhero.dto';

@Injectable()
export class SuperheroesService {
  async getSuperheroes() {
    return sortByHumility(database);
  }

  async createSuperhero(dto: CreateSuperheroDto) {
    const newHeroId = database.length + 1;

    const superHero = {
      id: newHeroId,
      ...dto,
    };

    database.push({
      ...superHero,
    });

    return superHero;
  }
}
