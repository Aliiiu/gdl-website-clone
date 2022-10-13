const HomePage = () => {
  return (
    <div className="flex flex-col">
      {Array(10000)
        .fill()
        .map(content => (
          <h1>Home Page</h1>
        ))}
    </div>
  );
};

export default HomePage;
