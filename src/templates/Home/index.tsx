import { useEffect, useState } from "react";

import Pallet, { IPallet } from "components/Pallet";
import Loader from "components/Helper/Loader";
import Head from "components/Helper/Head";
import Aside from "components/Aside";

import { GET_ALL_PALLETS } from "services/api";

import * as S from "./styles";

const HomeTemplate = () => {
  const [loading, setLoading] = useState(false);
  const [infinite, setInfinite] = useState(true);
  const [total, setTotal] = useState(20);
  const [data, setData] = useState<IPallet[]>([]);

  const { url } = GET_ALL_PALLETS(total);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const response = await fetch(url);
      const json = await response.json();

      setData(json);
      setLoading(false);

      if (response.ok && json.length < total) setInfinite(false);
    })();
  }, [total]);

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

  return (
    <>
      <Head title="Paletas" />
      <S.Wrapper>
        <div className="left">
          {data.map(
            ({
              id,
              pallet1,
              pallet2,
              pallet3,
              pallet4,
              created_at,
            }: IPallet) => (
              <Pallet
                key={id}
                id={id}
                created_at={created_at}
                pallet1={pallet1}
                pallet2={pallet2}
                pallet3={pallet3}
                pallet4={pallet4}
              />
            )
          )}
        </div>
        <Aside />
      </S.Wrapper>
      {loading && <Loader />}
    </>
  );
};

export default HomeTemplate;
