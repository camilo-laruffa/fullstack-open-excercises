import React from "react";
import ReactDOM from "react-dom";

// Creo un componente
const componenteNuevo = () => {
  return (
    <div>
      <a href="#">Mi cara cuando</a>
    </div>
  );
};

// Creo la "app"
const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;

  console.log("temmie col leg???");
  // Cuando el codigo se encuentra entre llaves es evaluado como js
  return (
    <div>
      <h1>Camilo Laruffa, React God</h1>
      <p>How es {now.toString()}</p>
      <p>
        {a} más {b} es {a + b}
      </p>
      <componenteNuevo />
      <componenteNuevo />
      <componenteNuevo />
    </div>
    //Añado el componente adentro de la app
  );
};
// Se renderiza la app dentro del root, que es la ID del <div> que esta en el index.html
ReactDOM.render(<App />, document.getElementById("root"));
