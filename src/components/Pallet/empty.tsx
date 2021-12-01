import * as S from "./styles";

const EmptyPallet: React.FC = () => {
  return (
    <S.BoxPallet>
      <S.PalletColors empty>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`pallet_${i}`}>
            <span />
          </div>
        ))}
      </S.PalletColors>
    </S.BoxPallet>
  );
};

export default EmptyPallet;
