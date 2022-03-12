import { heroes } from '../data/hereoes';

export const getHeroById = (id = '') => {
  return heroes.find((hero) => hero.id == id);
};
