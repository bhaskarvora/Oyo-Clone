const Header2 = () => {
    const List = [
      {
        name: "Bangalore",
      },
      {
        name: "Kolkata",
      },
      {
        name: "Mumbai",
      },
      {
        name: "Delhi",
      },
      {
        name: "Hyderabad",
      },
    ];
  
    return (
      <div>
        <div className="flex px-10 py-3 bg-gray-100 justify-between">
          {List.map((e) => (
            <span key={e.name}>{e.name}</span>
          ))}
        </div>
      </div>
    );
  };
  
  export default Header2;
  