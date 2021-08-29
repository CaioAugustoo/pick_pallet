import Favorites from "components/Favorites";
import * as S from "./styles";

const Aside = () => {
  return (
    <S.Aside>
      <S.Wrapper>
        <S.Title>As paletas mais fantásticas</S.Title>
        <S.Description>
          Descubra as melhores paletas criadas pela nossa comunidade.
        </S.Description>
        <S.Line />
        <Favorites />
      </S.Wrapper>
    </S.Aside>
  );
};

export default Aside;
