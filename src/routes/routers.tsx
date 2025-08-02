import { urls } from '~/helpers';
import PokemonList from '~/pages/PokemonList';
import PokemonDetails from '~/pages/PokemonDetails';

const routers = [
  {
    path: urls.pokemonList,
    element: <PokemonList />,
  },
  {
    path: urls.pokemonDetails,
    element: <PokemonDetails />,
  },
];

export default routers;
