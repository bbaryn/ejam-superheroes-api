import { Superhero } from 'src/common/types';

export const sortByHumility = (arr: Superhero[]) =>
  arr.sort((a, b) => b.humilityScore - a.humilityScore);
