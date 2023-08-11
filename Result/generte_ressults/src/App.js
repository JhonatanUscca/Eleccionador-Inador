// Importación de estilos y módulos necesarios
import './App.css';  // Importa el archivo de estilos CSS
import { useState } from "react";  // Importa la función useState desde React
import Axios from "axios";  // Importa la librería Axios para hacer solicitudes HTTP

// Definición del componente App
function App() {
  // Estado local para almacenar los resultados de la consulta
  const [resultList, setResult] = useState([]);

  // Función para obtener y mostrar los resultados
  const addResults = () => {
    Axios.get("http://localhost:8000/addResults", {}).then((response) => {
      setResult(response.data);  // Actualiza el estado con los datos de la respuesta
    });
  }

  // Renderización del componente
  return (
    <div className="App">
      <div className="candidateSelection">
        <h2>Resultados</h2>
      </div>
      <div className='lista'>
        <div className='result'>
          {/* Botón para generar los resultados */}
          <button className='button' onClick={addResults}>Generar Resultados</button>
          <h3>El candidato con más votos:</h3>
          {
            // Mapea los resultados y muestra el nombre del candidato con más votos
            resultList.map((val, key) => {
              return <div className='contenedor'> {val.name} </div>;
            })
          }
          <h3>Con la cantidad de votos:</h3>
          {
            // Mapea los resultados y muestra la cantidad de votos del candidato
            resultList.map((val, key) => {
              return <div className='contenedor'> {val.votes} </div>;
            })
          }
        </div>
      </div>
      <div>
        {/* Botón para regresar a la página principal */}
        <button className='button'>Regresar a la página principal</button>
      </div>
    </div>
  );
}

// Exporta el componente App como predeterminado
export default App;
