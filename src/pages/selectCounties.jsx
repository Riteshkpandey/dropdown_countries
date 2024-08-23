import React, { useState } from "react";
import Select from "../components/selects";
import countries from "../constant/data";

const SelectCountries = () => {
  const CountryData = countries.map((val) => val.name);
  console.log(CountryData);
  const [city, setCity] = useState(null);

  const handleSelectOperation = (countryName) => {
    const cities = countries
      .filter((val) => countryName === val.name)
      .map((val) => val.cities)[0];
    setCity(cities);
  };

  return (
    <div>
      <div>Countries</div>
      <Select
        title="select countries"
        option={CountryData}
        handleSelectOperation={handleSelectOperation}
      />
      <div>Cities</div>
      <Select option={city} />
    </div>
  );
};

export default SelectCountries;
