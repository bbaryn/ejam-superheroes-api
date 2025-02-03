import { Body, Controller, Get, Post } from '@nestjs/common';
import { Superhero } from 'src/common/types';
import { CreateSuperheroDto } from './dto/createSuperhero.dto';
import { SuperheroesService } from './superheroes.service';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Get()
  getSuperheroes(): Promise<Superhero[]> {
    return this.superheroesService.getSuperheroes();
  }

  @Post()
  createSuperhero(@Body() body: CreateSuperheroDto): Promise<Superhero> {
    return this.superheroesService.createSuperhero(body);
  }
}
