import { useEffect, useState } from "react";

const useInfiniteScroll = () => {
  const [infinite, setInfinite] = useState(true);
  const [total, setTotal] = useState(20);

  useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.85 && !wait) {
          setTotal((total: number) => total + 18);
          wait = true;

          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite]);

  return { total, setInfinite };
};

export default useInfiniteScroll;
