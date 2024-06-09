const Shimmer = () => {
  const rows = 9;
  const shimmerItems = Array.from({ length: rows });
  return (
    <div className="flex flex-wrap justify-center">
      {shimmerItems.map((_, index) => (
        <div
          key={index}
          className="m-4 p-4 h-80 w-72 bg-gray-100 animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
