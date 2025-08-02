import { useState } from 'react';
import Header from './components/Header';
import { ModeType } from './types';
import PaginatedPokemon from './components/PaginatedPokemon';
import InfintiePokemon from './components/InfintiePokemon';

export default function PokemonList() {
  const limit = 20;
  const [mode, setMode] = useState<ModeType>('page');

  return (
    <div
      className={`w-full flex flex-col pb-[20px] ${mode === 'page' ? 'bg-[#e7ecff]' : 'bg-[#dffbec]'}`}
    >
      <div className="container-fluid">
        <Header setMode={setMode} mode={mode} />
        {mode === 'page' ? (
          <PaginatedPokemon limit={limit} />
        ) : (
          <InfintiePokemon limit={limit} />
        )}
      </div>
    </div>
  );
}
