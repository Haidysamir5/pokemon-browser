import { useEffect, useRef } from 'react';
import { PokemonType } from '../types';
import PokemonCard from './PokemonCard';
import { useInfiniteQuery } from '@tanstack/react-query';
import PokemonLoader from './CardSkeleton';
import { getPokemonList } from '../utils/apis';
import ErrorBoundary from '~/components/ErrorBoundary';

export default function InfintiePokemon({ limit }: { limit: number }) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,

    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ['infinitePokemon'],
    queryFn: ({ pageParam = 1 }) => getPokemonList({ page: pageParam, limit }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const totalPages = Math.ceil(lastPage.count / limit);
      const nextPage = allPages.length + 1;
      return nextPage <= totalPages ? nextPage : undefined;
    },
  });
  const results = data?.pages.flatMap((page) => page.results) || [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 },
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  return (
    <>
      {isLoading ? (
        <PokemonLoader />
      ) : (
        <ErrorBoundary isError={Boolean(error) && !data?.pages}>
          <div className="flex flex-col">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
              {results?.map((item: PokemonType) => {
                return <PokemonCard {...item} />;
              })}
            </div>
            <div ref={observerRef} className="mt-6 h-12 flex justify-center">
              {isFetchingNextPage && <PokemonLoader />}
            </div>

            <button
              className="mt-2 px-4 py-2 w-auto flex items-center justify-center text-black rounded font-semibold hover:underline text-center"
              onClick={() => fetchNextPage()}
            >
              Load More
            </button>
            <p className="text-center">
              showing {results.length || 0} of Pokemon
            </p>
          </div>
        </ErrorBoundary>
      )}
    </>
  );
}
