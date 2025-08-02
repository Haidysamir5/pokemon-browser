import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function CardSkeleton() {
  return (
    <div className="w-full grid grid-cols-4 gap-6 ">
      {Array.from({ length: 8 }).map((_, id) => (
        <div className="rounded-xl bg-white p-4 shadow" key={id}>
          <Skeleton height={160} borderRadius={12} />
          <div className="mt-4 space-y-2">
            <Skeleton height={12} width="75%" />
            <Skeleton height={12} width="50%" />
          </div>
        </div>
      ))}
    </div>
  );
}
