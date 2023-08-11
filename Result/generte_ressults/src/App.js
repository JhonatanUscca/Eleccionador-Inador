import './App.css';
import { useState } from "react";
import Axios from "axios";

function App() {
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [resultList,setResult] = useState([]);
  //const [name,setName] = useState("");

  const addVote = () => {
    if (selectedCandidate) {
      Axios.post("http://localhost:8000/addVote", {
        candidate: selectedCandidate
      }).then(() => {
        alert("Voto registrado para el candidato " + selectedCandidate);
      });
    } else {
      alert("Por favor selecciona un candidato.");
    }
  }
  const addResults = () => {
      Axios.get("http://localhost:8000/addResults", {
      }).then((response) => {
        setResult(response.data)
      });
  }

  return (
    <div className="App">
      <div className="candidateSelection"> 
        <h3>Selecciona un candidato</h3>
        <select onChange={(e) => setSelectedCandidate(e.target.value)}>
          <option value="">-- Seleccione --</option>
          <option value="A">Candidato A</option>
          <option value="B">Candidato B</option>
          <option value="C">Candidato C</option>
        </select>
        <button onClick={addVote}>Votar</button>
      </div>
      <div className='lista'>
        <button onClick={addResults}>Resultados</button>
        {
          resultList.map((val,key)=>{
            return <div className=''> {val.name}
              
            </div>
          }
          )
        }
      </div>
    </div>
  );
}
export default App;