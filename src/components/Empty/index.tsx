import Link from "next/link";

import Button from "components/Button";

import * as S from "./styles";

export type EmptyProps = {
  title?: string;
  description?: string;
};

const Empty = ({
  title = "Nenhuma paleta salva",
  description = "Você ainda não salvou paletas 😔",
}: EmptyProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      {!!title && <S.Description>{description}</S.Description>}

      <Link href="/" passHref>
        <a title="Voltar para página inicial">
          <Button>Explorar paletas</Button>
        </a>
      </Link>
    </S.Wrapper>
  );
};

export default Empty;
