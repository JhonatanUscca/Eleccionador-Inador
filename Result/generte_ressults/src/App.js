import './App.css';
import {useState} from "react";
import Axios from "axios";

function App(){
  const [correo,setCorreo] = useState("");
  const [numero,setNumero] = useState(0);

  const [empleadoslist,setE] = useState([]);

  const add = ()=>{
    Axios.post("http://localhost:3001/create",{
      correo:correo,
      numero:numero
    }).then(()=>{
      alert("empleado resgistrado");
    });
  }
  const getE = ()=>{
    Axios.get("http://localhost:3001/empleados",{
    }).then((response)=>{
      setE(response.data);
    });
  }
  return (
    <div className="App">
          <div className="App">
            <label>Correo:<input
            onChange={(event)=>{
              setCorreo(event.target.value)
            }}
            type="text"/> </label>
            <label>Numero:<input
            onChange={(event)=>{
              setNumero(event.target.value)
            }}
             type="number"/> </label>
            <button onClick={add}>Registar</button>
          </div>
            <div className='lista'>
            <button onClick={getE}>Registar</button>
            {
              empleadoslist.map((val,key)=>{
                return <div className=''> (val,correo) </div>
              })
            }
            </div>
    </div>
  );
}

export default App;
//<button >Registar</button>

//<button onClick={add}>Registar</button>