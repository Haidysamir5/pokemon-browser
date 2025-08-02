import { PokemonDetailsType } from '../types';

export default function BaseStats({
  stats,
}: {
  stats: PokemonDetailsType['stats'];
}) {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold text-gray-700 border-b pb-1">
        Base Stats
      </h3>
      <div className="space-y-2">
        {stats.map((stat, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm text-gray-600">
              <span>{stat.stat.name.replace('-', ' ')}</span>
              <span>{stat.base_stat}</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded">
              <div
                className="h-full bg-purple-500 rounded"
                style={{
                  width: `${Math.min(stat.base_stat, 100)}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
