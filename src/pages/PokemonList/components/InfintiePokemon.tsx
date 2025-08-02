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
        <ErrorBoundary isError={Boolean(error)}>
          <div className="flex flex-col">
            <div className="w-full grid grid-cols-4 gap-6 ">
              {data?.pages
                .flatMap((page) => page.results)
                ?.map((item: PokemonType) => {
                  return <PokemonCard {...item} />;
                })}
            </div>
            <div ref={observerRef} className="mt-6 h-12 flex justify-center">
              {isFetchingNextPage && <PokemonLoader />}
            </div>
          </div>
        </ErrorBoundary>
      )}
    </>
  );
}
