import { GameSymbol } from "./GameSymbol";

export function GameInfo({ isDraw, currentStep, winnerSymbol }) {
  const Wrapper = ({ children }) => <div className="mb-2">{children}</div>;

  if (isDraw) return <Wrapper>Ничья</Wrapper>;

  if (winnerSymbol)
    return (
      <Wrapper>
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </Wrapper>
    );

  return (
    <Wrapper>
      Ход: <GameSymbol symbol={currentStep} />
    </Wrapper>
  );
}
