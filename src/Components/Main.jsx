import React, { useState, useEffect } from "react";
import getAllCountriesInfo from "../Services/CountriesService";

const MainMenu = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countriesData = await getAllCountriesInfo();
        console.log(getAllCountriesInfo());
        setCountries(countriesData);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="main-menu">
      <div className="flags">
        {countries && countries.length > 0 ? (
          countries.map((country, index) => (
            <div key={index}>
              <img
                src={country.flags.png}
                alt={`Flag ${index}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "5px",
                }}
              />
              <h2>{country.name.common}</h2>
              <p>Capital: {country.capital}</p>
              <p>Region: {country.region}</p>
              <button>More</button>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default MainMenu;
