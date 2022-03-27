import React, { useState } from "react";
import ReactDOM from "react-dom";

//? React hooks, useState

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;
//* Dividimos el display para evitar una renderizacion constante de la pagina
const Display = ({ counter }) => <h1>{counter}</h1>;

const App = () => {
  //* Cuando usamos "useState" estamos obteniendo 2 valores, un array de 2 items. Uno lo usamos para la variable que guarda el valor (0 en este caso, pero podria ser banana) y otro que se registra como una funcion que cambia el valor de la primera variable. Esta podria llamarse de cualquier manera, es decir, si le pongo [counter, aNismanLoMataron], entonces cuando llame a aNismanLoMataron(3) voy a hacer que counter valga 3. Como es un estado del componente, alterarlo hace que se altere lo que vemos en pantalla.
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="Añadir" />
      <Button handleClick={decreaseByOne} text="Quitar" />
      <Button handleClick={setToZero} text="No value? 😧" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
