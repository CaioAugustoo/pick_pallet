import { useEffect, useState } from "react";

import Pallet, { IPallet } from "components/Pallet";
import Head from "components/Helper/Head";
import Aside from "components/Aside";
import EmptyPallet from "components/Pallet/empty";

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
      setLoading(true);

      if (response.ok && json.length < total) setInfinite(false);
    })();
  }, [total]);

  return (
    <>
      <Head title="Paletas" />
      <S.Wrapper>
        <div className="left">
          {!!data.length &&
            data.map(pallet => <Pallet key={pallet.id} pallet={pallet} />)}

          {loading && [1, 2, 3, 4, 5].map(i => <EmptyPallet key={i} />)}
        </div>
        <Aside />
      </S.Wrapper>
    </>
  );
};

export default HomeTemplate;
