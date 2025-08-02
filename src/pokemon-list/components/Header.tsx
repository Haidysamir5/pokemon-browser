import { ModeType } from '../types';

export default function Header({
  setMode,
  mode,
}: {
  mode: ModeType;
  setMode: React.Dispatch<React.SetStateAction<ModeType>>;
}) {
  const getButtonClassName = (buttonMode: ModeType) => {
    if (mode === buttonMode)
      return 'bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition';
    return 'bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition';
  };

  return (
    <div className="text-center my-6">
      <h1 className="text-3xl font-bold mb-1">⚡ Pokédex</h1>
      <p className="text-gray-600 mb-4">
        Discover and explore Pokemon with infinite scroll
      </p>

      <div className="flex justify-center gap-3">
        <button
          className={getButtonClassName('page')}
          onClick={() => setMode('page')}
        >
          Page Controls
        </button>
        <button
          className={getButtonClassName('infinite')}
          onClick={() => setMode('infinite')}
        >
          Infinite Scroll
        </button>
      </div>
    </div>
  );
}
