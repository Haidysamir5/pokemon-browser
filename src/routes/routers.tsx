import { urls } from '../helpers';
import PokemonList from '../pokemon-list';
import PokemonDetails from '../pokemon-details';

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
