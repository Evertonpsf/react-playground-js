import { useState } from "react";

function Contador() {

  // const [nome_estado, função_setState] = useState(valor_inicial_do_estado)

  // Estado valor (React)
  const [valor, setValor] = useState(0);

  // Function (TypeScrript)
  function handClick(){
    setValor(valor + 1);
  }

  // Function (TypeScrript)
  function handClickSubtracao(){
    setValor(valor - 1);
  }

  return (
    <div>
      <h2>Componente Contador</h2>

      <p>O valor atual do meu estado é: {valor}</p>
      <button onClick={handClick}>Adicionar +1</button>
      <button onClick={handClickSubtracao}>Subtrair -1</button>

    </div>
  )
}

export default Contador