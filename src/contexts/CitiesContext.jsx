import { createContext, useEffect, useState } from "react";

const CitiesContext = createContext();

import PropTypes from "prop-types";

//Provider
const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCities = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:8000/cities");
      const data = await res.json();
      setCities(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getCities();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};
CitiesProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
export { CitiesProvider };
