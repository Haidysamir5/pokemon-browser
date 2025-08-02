export type PokemonDetailsType = {
  is_hidden: boolean;
  abilities: { ability: { name: string; url: string } }[];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: {
    name: string;
    url: string;
  }[];
  game_indices: {
    game_index: number;
    version: any;
  }[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: { name?: string; url: string };
    version_group_details: any[];
  }[];
  name: string;
  order: number;
  past_abilities: {
    abilities: {
      ability: { url: string } | null;
      is_hidden: boolean;
      slot: number;
    }[];
    generation: {
      name: string;
      url: string;
    };
  }[];
  past_types: any[];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: any;
    versions: any;
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
};
