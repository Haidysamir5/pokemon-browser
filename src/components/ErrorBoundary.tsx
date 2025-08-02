const ErrorBoundary = ({
  isError,
  children,
}: {
  isError: boolean;
  children: React.ReactNode;
}) => {
  return isError ? (
    <div className="flex flex-col items-center justify-center gap-4 py-8 h-[100vh]">
      <p className="text-red-500 font-bold text-lg">Something went wrong</p>
      <button
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 font-semibold"
        onClick={() => window.location.reload()}
      >
        Retry
      </button>
    </div>
  ) : (
    <>{children}</>
  );
};

export default ErrorBoundary;
