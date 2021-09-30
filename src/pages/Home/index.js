import React from 'react';

import GameContextProvider from '../../contexts/GameContext';
import Board from '../../components/Board';
import './style.css';

export default function Homw() {
  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  );
}
