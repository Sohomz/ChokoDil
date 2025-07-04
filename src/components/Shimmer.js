const Shimmer = () => {
  const shimmerCardNumber = 8;
  const shimmerArray = Array.from({ length: shimmerCardNumber }, (_, i) => i); //i means its index value assigned to each element, elseEky warning will come in Shimmer UI,  this will create an array with sequenctial like 0,1,2,3,4
  return (
    <div className="flex flex-wrap p-10 justify-evenly items-center mt-16">
      {shimmerArray.map((index) => (
        <div
          className="card-items p-4 w-80 border rounded-lg shadow-md animate-pulse"
          key={index}
        >
          <div key="1st_line" className="h-32 bg-gray-300 mb-4"></div>
          <div key="2nd_line" className="h-6 bg-gray-300 mb-2"></div>
          <div key="3rd_line" className="h-4 bg-gray-300 w-3/4 mb-2"></div>
          <div key="4th_line" className="h-4 bg-gray-300 w-1/2"></div>
        </div>
      ))}
    </div>
  );
};
export default Shimmer;
