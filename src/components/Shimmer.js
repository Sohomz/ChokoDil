const Shimmer = () => {
  const shimmerCardNumber = 12;
  const shimmerArray = Array.from({ length: shimmerCardNumber });
  return (
    <div className="flex flex-wrap p-10 justify-evenly items-center mt-48">
      {shimmerArray.map((index) => (
        <div
          className="card-items p-4 w-80 border rounded-lg shadow-md animate-pulse"
          key={index}
        >
          <div className="h-32 bg-gray-300 mb-4"></div>
          <div className="h-6 bg-gray-300 mb-2"></div>
          <div className="h-4 bg-gray-300 w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 w-1/2"></div>
        </div>
      ))}
    </div>
  );
};
export default Shimmer;
