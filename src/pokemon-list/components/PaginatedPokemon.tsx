import { PokemonType } from '../types';
import PokemonCard from './PokemonCard';
import Pagination from './Pagination';
import { useState } from 'react';
import PokemonLoader from './PokemonLoader';
import { getPokemonList } from '../utils/apis';
import { useQuery } from '@tanstack/react-query';

export default function PaginatedPokemon({ limit }: { limit: number }) {
  const [page, setPage] = useState<number>(1);

  const { data, error, isLoading } = useQuery({
    queryKey: ['pagingPokemon', page],
    queryFn: () => getPokemonList({ page, limit }),
  });

  return (
    <>
      {isLoading ? (
        <PokemonLoader />
      ) : error ? (
        <p>error</p>
      ) : (
        <div className="flex flex-col">
          <div className="w-full grid grid-cols-4 gap-6 ">
            {data?.results?.map((item: PokemonType) => {
              return <PokemonCard {...item} />;
            })}
          </div>

          <Pagination
            page={page}
            setPage={setPage}
            count={data?.count ?? 0}
            limit={limit}
          />
        </div>
      )}
    </>
  );
}
