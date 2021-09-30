import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { GameContext } from '../contexts/GameContext';

export default function Square({ value, index }) {
  const { squares, setSquares, isXNext, setIsXNext } = useContext(GameContext);

  // explicando: se isXNext = true - X or O
  function handleClick() {
    // tem algum valor? n faz nada (isso ajuda p n mudar X to O)
    if (squares[index]) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  }

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};
