import { useEffect, useState } from "react";

import Pallet, { IPallet } from "components/Pallet";
import Loader from "components/Helper/Loader";
import Head from "components/Helper/Head";
import Aside from "components/Aside";

import useInfiniteScroll from "hooks/useInfiniteScroll";

import { GET_ALL_PALLETS } from "services/api";

import * as S from "./styles";

const HomeTemplate = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IPallet[]>([]);

  const { total, setInfinite } = useInfiniteScroll();
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

  return (
    <>
      <Head title="Paletas" />
      <S.Wrapper>
        <div className="left">
          {data?.map(pallet => (
            <Pallet key={pallet.id} {...pallet} />
          ))}
        </div>
        <Aside />
      </S.Wrapper>
      {loading && <Loader />}
    </>
  );
};

export default HomeTemplate;
