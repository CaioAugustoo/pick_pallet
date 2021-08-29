import Favorites from "components/Favorites";
import * as S from "./styles";

const Aside = () => {
  return (
    <aside>
      <S.Wrapper>
        <S.Title>As paletas mais bonitas</S.Title>
        <S.Description>
          Descubra as melhores paletas criadas pela nossa comunidade.
        </S.Description>
        <S.Line />
        <Favorites />
      </S.Wrapper>
    </aside>
  );
};

export default Aside;
