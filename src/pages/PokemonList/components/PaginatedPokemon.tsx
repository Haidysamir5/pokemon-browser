import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ErrorBoundary from '~/components/ErrorBoundary';
import { getPokemonList } from '../utils/apis';
import PokemonCard from './PokemonCard';
import Pagination from './Pagination';
import CardSkeleton from './CardSkeleton';
import { PokemonType } from '../types';

export default function PaginatedPokemon({ limit }: { limit: number }) {
  const [page, setPage] = useState<number>(1);

  const { data, error, isLoading } = useQuery({
    queryKey: ['pagingPokemon', page],
    queryFn: () => getPokemonList({ page, limit }),
  });

  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : error ? (
        <p>error</p>
      ) : (
        <ErrorBoundary isError={Boolean(error)}>
          <div className="flex flex-col">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
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
        </ErrorBoundary>
      )}
    </>
  );
}
