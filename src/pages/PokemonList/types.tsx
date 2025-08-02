export type PokemonType = { name: string; url: string };

export type PokemonListType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonType[];
};

export type ModeType = 'infinite' | 'page';
