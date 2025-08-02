import { PokemonListType } from '../types';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
export const getPokemonList = async ({
  limit = 20,
  page,
}: {
  limit?: number;
  page: number;
}): Promise<PokemonListType> => {
  const offset = (page - 1) * limit;
  const response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
  return await response.json();
};
