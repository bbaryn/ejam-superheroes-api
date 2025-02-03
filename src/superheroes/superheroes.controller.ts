import { Controller, Get } from '@nestjs/common';
import { Superhero } from 'src/common/types';
import { SuperheroesService } from './superheroes.service';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Get('')
  getSuperheroes(): Promise<Superhero[]> {
    return this.superheroesService.getSuperheroes();
  }
}
