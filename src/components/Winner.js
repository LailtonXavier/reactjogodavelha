import React, { useContext } from 'react';

import { GameContext } from '../contexts/GameContext';

export default function Board() {
  const context = useContext(GameContext);

  console.log(context);

  return (
    <div>
      <p>Tabuleiro</p>
    </div>
  );
}
