import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const LocationContext = createContext();

function LocationProvider({ children }) {
  const [pathName, setPathName] = useState("");
  let location = useLocation();

  useEffect(() => {
    setPathName(location.pathname);
  }, [location]);

  return (
    <LocationContext.Provider value={{ pathName }}>
      {children}
    </LocationContext.Provider>
  );
}

function useLocationPath() {
  const context = useContext(LocationContext);
  if (context === undefined)
    throw new Error("Location Context was used outside location Provider");
  return context;
}

LocationProvider.propTypes = {
  children: PropTypes.any,
};

export { LocationProvider, useLocationPath };
