import React, { Component } from 'react';


interface Resultado {
  id: number;
  nombre: string;
  valor: number;
}

const datosBaseDeDatos: Resultado[] = [
  { id: 1, nombre: 'Ejemplo 1', valor: 100 },
  { id: 2, nombre: 'Ejemplo 2', valor: 200 },
  { id: 3, nombre: 'Ejemplo 3', valor: 300 },
  // ... más datos
];

interface State {
  resultados: Resultado[]; // Definimos el tipo de estado aquí
}

class RegenerarResultados extends Component<{}, State> { // Usamos State como tipo de estado
  constructor(props: {}) {
    super(props);
    this.state = {
      resultados: [],
    };
  }

  componentDidMount() {
    // Simulamos una llamada a la base de datos y actualizamos el estado con los resultados
    setTimeout(() => {
      this.setState({ resultados: datosBaseDeDatos });
    }, 1000); // Simulamos una demora de 1 segundo para obtener los datos
  }

  render() {
    const { resultados } = this.state;

    return (
      <div>
        <h2>Tabla de Resultados</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {resultados.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RegenerarResultados;
