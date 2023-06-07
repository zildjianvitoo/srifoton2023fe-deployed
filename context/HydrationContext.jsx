import { useState, useEffect } from "react";

const HydrationContext = ({ children }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return <>{isHydrated ? <div>{children}</div> : null}</>;
};

export default HydrationContext;
