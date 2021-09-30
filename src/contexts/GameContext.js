import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const GameContext = createContext();

// ele vai envolver todos os components da app
// eu receberia = props.children = {children} - ele são tds os elementos
export default function GameContextProvider({ children }) {
  const [squares, setSquares] = useState(Array(9).fill(null)); // array 9 posição value null
  const [isXNext, setIsXNext] = useState(true); // é a vez do X? true or false vez do O

  // olha a importancia do state, todo mundo recebe algo, que precisa esta dentro desse state
  // criar um obj so pra referenciar ( tudo que for tendo de estado, joga aqui)
  const state = {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
  };
  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
}

GameContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
