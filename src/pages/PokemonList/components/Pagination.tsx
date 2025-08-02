export default function Pagination({
  setPage,
  page,
  count,
  limit,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  limit: number;
}) {
  const totalCount = count || 0;
  const totalPages = Math.ceil(totalCount / limit);
  const maxDisplayedPages = 5;

  const getPagesList = () => {
    const maxPagesList = Array.from(
      { length: maxDisplayedPages },
      (_, i) => i + 1,
    );
    if (totalPages <= maxDisplayedPages) {
      return maxPagesList;
    }

    return [...maxPagesList, 'etc', totalPages];
  };

  return (
    <div className="flex justify-center items-center mt-6 gap-2">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 text-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ‹ Previous
      </button>

      {getPagesList().map((pageNumber, idx) =>
        pageNumber === 'etc' ? (
          <span
            key={`dots-${idx}`}
            className="w-10 h-10 flex items-center justify-center text-gray-400 text-sm"
          >
            ...
          </span>
        ) : (
          <button
            key={pageNumber}
            onClick={() => setPage(Number(pageNumber))}
            className={`w-10 h-10 rounded-md border text-sm font-medium transition 
              ${
                page === pageNumber
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
          >
            {pageNumber}
          </button>
        ),
      )}

      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
        className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 text-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next ›
      </button>
    </div>
  );
}
