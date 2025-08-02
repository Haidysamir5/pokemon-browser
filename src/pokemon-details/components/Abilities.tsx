import { PokemonDetailsType } from '../types';

export default function Abilities({
  abilities,
  isHidden,
}: {
  abilities: PokemonDetailsType['abilities'];
  isHidden: boolean;
}) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Abilities</h3>
      <div className="flex flex-col gap-2 flex-wrap">
        {abilities.map((item, i) => (
          <div
            key={i}
            className="w-fit bg-white text-gray-900 border border-gray-300 rounded-full px-2 py-0.5 flex items-center gap-1 text-xs"
          >
            <span className="capitalize">{item.ability.name}</span>
            {i === abilities.length - 1 && isHidden && (
              <span className="text-xs text-gray-500">(Hidden)</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
