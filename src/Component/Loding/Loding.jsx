 

export const Loding = () => {
  return (
    <div className="max-w-[1120px] mx-auto px-4 py-16 flex flex-col items-center justify-center gap-4">
      <div className="relative flex items-center justify-center">
        {/* Soft Glow */}
        <div className="absolute w-16 h-16 rounded-full bg-[#E7FE29]/25 blur-md" />

        {/* Spinner Ring */}
        <div className="w-14 h-14 rounded-full border-4 border-gray-300 border-t-[#E7FE29] animate-spin" />
      </div>

      <p className="text-base font-medium text-gray-500 animate-pulse">
        Loading players...
      </p>
    </div>
  );
};