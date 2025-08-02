import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from './utils/apis';
import BaseStats from '../pokemon-details/components/BaseStats';
import Abilities from './components/Abilities';

export default function PokemonDetails() {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ['pokemonDetails'],
    queryFn: () => getPokemonDetails({ id }),
  });

  return (
    <div className="w-full flex  bg-[#faedf7] pb-[20px] ">
      <div className="container-fluid flex flex-col ">
        <button className="text-xs text-gray-600 mb-2 hover:underline">
          ← Back to List
        </button>
        {isLoading ? (
          <p>isLoading</p>
        ) : error ? (
          <p>error</p>
        ) : (
          data && (
            <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4 py-10">
              <div className="w-full max-w-xl rounded-2xl shadow-xl bg-white overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-500 to-pink-400 text-white p-4 text-center">
                  <p className="text-sm">
                    #{data.id.toString().padStart(3, '0')}
                  </p>
                  <h2 className="text-2xl font-bold">{data.name}</h2>
                </div>

                <div className="w-full grid grid-cols-2 gap-4 px-6  items-center">
                  <div className="flex flex-col gap-4">
                    {/* Sprite */}
                    <div className="w-50 h-50 bg-[#f6f7f9] rounded-full shadow-xl flex items-center justify-center">
                      <img
                        src={data.sprites.front_default}
                        alt={data.name}
                        className="w-full h-full"
                      />
                    </div>

                    {/* Height & Weight */}
                    <div className="flex justify-around mt-6 text-sm text-gray-700 px-6">
                      <div className="text-center">
                        <p className="font-medium mb-1">Height</p>
                        <div className="bg-gray-100 px-4 py-1 rounded-lg inline-block">
                          {data.height / 10} m
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="font-medium mb-1">Weight</p>
                        <div className="bg-gray-100 px-4 py-1 rounded-lg inline-block">
                          {data.weight / 10} kg
                        </div>
                      </div>
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
          )
        )}
      </div>
    </div>
  );
}
