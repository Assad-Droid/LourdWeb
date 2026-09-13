import { useEffect, useState } from "react";
import { getAddOns, getDesigns, getServices } from "./api";
import { CatalogContext } from "./CatalogContext";

export function CatalogProvider({ children }) {
  const [catalog, setCatalog] = useState({ services: [], designs: [], addOns: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isCurrent = true;

    Promise.all([getServices(), getDesigns(), getAddOns()])
      .then(([services, designs, addOns]) => {
        if (isCurrent) setCatalog({ services, designs, addOns });
      })
      .catch((requestError) => {
        if (isCurrent) setError(requestError.message || "Unable to load the catalog.");
      })
      .finally(() => {
        if (isCurrent) setIsLoading(false);
      });

    return () => {
      isCurrent = false;
    };
  }, []);

  return (
    <CatalogContext.Provider value={{ ...catalog, isLoading, error }}>
      {children}
    </CatalogContext.Provider>
  );
}
