import { PokemonDetailsType } from '../types';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemonDetails = async ({
  id,
}: {
  id: string | undefined;
}): Promise<PokemonDetailsType> => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return await response.json();
};
