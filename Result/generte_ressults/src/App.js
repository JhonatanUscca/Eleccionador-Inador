import './App.css';
import { useState } from "react";
import Axios from "axios";

function App() {
  const [resultList,setResult] = useState([]);
  const addResults = () => {
      Axios.get("http://localhost:8000/addResults", {
      }).then((response) => {
        setResult(response.data)
      });
  }
  return (
    <div className="App">
      <div className="candidateSelection"> 
        <h2>Resultados</h2>    
      </div>
      <div className='lista'>
        <div className='result'>
        <button className='button' onClick={addResults}>Generara Resultados</button>
        <h3>El caditato con mas votos:</h3>
        {
          resultList.map((val,key)=>{
            return <div className='contenedor'> {val.name}
            </div>
          }
          )
        }
        <h3>Con la cantida de votos: </h3>
        {
          resultList.map((val,key)=>{
            return <div className='contenedor'> {val.votes}
            </div>
          }
          )
        }
        </div>
      </div>
      <div>
      <button className='button'>regesar a la pagina principal</button>
      </div>
    </div>
  );
}
export default App;