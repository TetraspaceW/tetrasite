import { useEffect } from "react";
import { useLocation } from "react-router";

export const ScrollToTop = ({ children }: { children: React.ReactElement }) => {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView();
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return children;
};
