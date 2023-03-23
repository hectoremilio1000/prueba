import { useState } from "react";


let initialState = {

    id: 1,
    nombre: 'jose',
    apellido: 'juan'
}

function App() {

  const [person, setPerson] = useState(initialState)



 

  return (
    <div style={{margin:20}}>
      <p>cambia nombre, da click en el botón</p>
      <input />
      <button onClick={e => console.log(e)}>cambiar nombre</button>
      <p>{person.nombre}</p>
      <p>{person.apellido}</p>
    </div>
  );
}

export default App;
