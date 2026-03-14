import { useState } from "react";

function App() {
  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState([]);

  const agregarTarea = () => {
    if (tarea.trim() === "") return;
    setLista([...lista, tarea]);
    setTarea("");
  };

  const eliminarTarea = (indice) => {
    const nuevaLista = lista.filter((_, i) => i !== indice);
    setLista(nuevaLista);
  };

  return (
    <div style={{padding: "30px", fontFamily: "Arial"}}>
      <h1>Lista de tareas con React</h1>

      <input
        type="text"
        placeholder="Escribe una tarea"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
      />

      <button onClick={agregarTarea} style={{marginLeft: "10px"}}>
        Agregar
      </button>

      <ul>
        {lista.map((item, indice) => (
          <li key={indice}>
            {item}
            <button
              onClick={() => eliminarTarea(indice)}
              style={{marginLeft: "10px"}}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;