import React, { useContext } from 'react';
import Square from './Square';
import { GameContext } from '../contexts/GameContext';
import Player from './Player';
import Reset from './Reset';

export default function Board() {
  const { squares } = useContext(GameContext);

  return (
    <div className="board-container">
      <div className="painel">
        <Player />
        <Reset />
      </div>
      <div className="board">
        {squares.map((value, index) => (
          <Square value={value} index={index} />
        ))}
      </div>
    </div>
  );
}
