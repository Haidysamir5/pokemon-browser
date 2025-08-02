import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import ErrorBoundary from '~/components/ErrorBoundary';
import { urls } from '~/helpers';
import { getPokemonDetails } from './utils/apis';
import CardSkeleton from './components/CardSkeleton';
import BaseStats from './components/BaseStats';
import Abilities from './components/Abilities';
import SizeBox from './components/SizeBox';

export default function PokemonDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ['pokemonDetails', id],
    queryFn: () => getPokemonDetails({ id }),
  });

  return (
    <div className="w-full flex  bg-[#faedf7] pb-[20px] pt-[40px] ">
      <div className="container-fluid flex flex-col ">
        <div className="flex w-full">
          <button
            className="text-xs text-gray-600 mb-2 bg-white px-4 py-2 border border-gray font-bold hover:shadow-md"
            onClick={() => navigate(urls.pokemonList)}
          >
            ← Back to List
          </button>
        </div>
        {isLoading || isFetching ? (
          <CardSkeleton />
        ) : (
          <ErrorBoundary isError={Boolean(error)}>
            {data && (
              <div className="min-h-screen flex items-center justify-center px-4 py-10">
                <div className="w-full flex flex-col gap-4 max-w-xl rounded-2xl shadow-xl bg-white overflow-hidden pb-5">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-purple-500 to-pink-400 text-white p-4 text-center">
                    <h2 className="text-2xl font-bold">{data.name}</h2>
                    <p className="text-sm">
                      #{data.id.toString().padStart(3, '0')}
                    </p>
                  </div>

                  <div className="w-full grid grid-cols-2 gap-4 px-6  items-center">
                    <div className="flex flex-col gap-4">
                      {/* Sprite */}
                      <div className="w-50 h-50 bg-[#f6f7f9] rounded-full flex items-center justify-center">
                        <img
                          src={data.sprites.front_default}
                          alt={data.name}
                          className="w-full h-full"
                        />
                      </div>

                      {/* Height & Weight */}
                      <div className="grid grid-cols-2 gap-2 justify-between mt-6 text-sm text-gray-700 px-6">
                        <SizeBox
                          title="Height"
                          value={`${data.height / 10} m`}
                        />
                        <SizeBox
                          title="Weight"
                          value={`${data.weight / 10} kg`}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <BaseStats stats={data.stats} />

                      <Abilities
                        abilities={data.abilities}
                        isHidden={data.is_hidden}
                      />

                      {/* Base Experience */}
                      <div className="flex flex-col">
                        <h3 className="text-lg font-bold">Base Experience</h3>
                        <p className="text-purple-600 text-xl font-bold mt-1">
                          {data.base_experience} XP
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </ErrorBoundary>
        )}
      </div>
    </div>
  );
}
