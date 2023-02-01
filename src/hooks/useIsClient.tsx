import { useState, useLayoutEffect } from "react";

export const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);
  useLayoutEffect(() => {
    if (typeof window !== undefined) setIsClient(true);
  }, []);
  return isClient;
};
