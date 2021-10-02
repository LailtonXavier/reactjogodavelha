import React, { useContext } from 'react';
import t from 'prop-types';

import { GameContext } from '../contexts/GameContext';

export default function Square({ value, index }) {
  const {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    whoIsWinner,
    history,
    setHistory,
  } = useContext(GameContext);

  // explicando: se isXNext = true - X or O
  function handleClick() {
    // tem algum valor? n faz nada (isso ajuda p n mudar X to O)
    if (squares[index]) return;
    if (whoIsWinner) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);

    // nosso historico
    // ele set em history todo os esquares
    // e o proximo
    setHistory([
      ...history,
      {
        squares: [...squares],
        isNext: !isXNext,
        whoIsWinner,
      },
    ]);
  }

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
}

Square.defaultProps = {
  value: null,
};

Square.propTypes = {
  value: t.string,
  index: t.number.isRequired,
};
