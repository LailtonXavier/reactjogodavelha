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
