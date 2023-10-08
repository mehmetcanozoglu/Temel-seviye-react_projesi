import React from "react";

const City = ({ city }) => {
  console.log(city);
  return (
    <div>
      <div className="bg-success w-50 mx-auto mt-2 bg-info rounded">
        <h1 className="">{Math.ceil(city.main.temp-275.13)} °C</h1>
        <h1 className="">{city.name}</h1>
        <h1 className="">{city.weather[0].main}</h1>
      </div>
    </div>
  );
};

export default City;