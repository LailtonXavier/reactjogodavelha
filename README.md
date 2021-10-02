# Jogo da vela com Context


  ### Context api
  - todo component envoldido pelo `GameContext.Provider`
    -- vai ter acesso a seu valor = vai se o `children`

    # 01 start
    - squares, setSquares = nosso array com 9 posic vazias
    - state = nosso obj pegando os Array

    # 02 create components
    - `Board` = `Square` que seria nosso botão (caixa)
      * vc pode fazer uma func q rederiza os Square, ou render de uma vez

    # 03 import calcaleWinner para Board
    - aqui ja mostra quem ganha

    # 04 ver quem ganhou
    - `square`chamar nosso (whoIsWinner)
    - pegando no (handleClick) e ver se tiver algo nessa
    - estado n faz nd, para

    # 05 winner temos q falar que alguem ganhou
    - tem (whoIsWinner) mostra algo
    - no `reset`temos que falar pro (whoIsWinner) zarar tbm

    # 06 criar um history no Context
