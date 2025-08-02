import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function PokemonCardSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full flex flex-col gap-4 max-w-xl rounded-2xl shadow-xl bg-white overflow-hidden pb-5">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-400 text-white p-4 text-center">
          <Skeleton
            width={120}
            height={28}
            className="mx-auto mb-2"
            enableAnimation={true}
          />
          <Skeleton width={60} height={16} className="mx-auto" />
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 px-6 items-center  pb-6">
          <div className="flex flex-col gap-4">
            {/* Sprite */}
            <div className="w-32 h-32 bg-[#f6f7f9] rounded-full shadow-xl flex items-center justify-center mx-auto">
              <Skeleton circle width={96} height={96} />
            </div>
            {/* Height & Weight */}
            <div className="grid grid-cols-2 gap-2 justify-between mt-6 text-sm text-gray-700 px-6">
              <Skeleton width={60} height={24} className="rounded-lg" />
              <Skeleton width={60} height={24} className="rounded-lg" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {/* Base Stats */}
            <div>
              <Skeleton width={100} height={20} className="mb-2" />
              {[...Array(6)].map((_, i) => (
                <div key={i} className="mb-2">
                  <Skeleton width="80%" height={16} />
                  <Skeleton width="100%" height={8} className="mt-1 rounded" />
                </div>
              ))}
            </div>
            {/* Abilities */}
            <div>
              <Skeleton width={80} height={20} className="mb-2" />
              <div className="flex gap-2">
                <Skeleton width={60} height={24} className="rounded-full" />
                <Skeleton width={60} height={24} className="rounded-full" />
              </div>
            </div>
            {/* Base Experience */}
            <div>
              <Skeleton width={120} height={20} className="mb-2" />
              <Skeleton width={60} height={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
