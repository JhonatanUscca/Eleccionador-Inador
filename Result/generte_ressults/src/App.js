import React, { useState, useEffect } from 'react';
import mysql from 'mysql';

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'tarea1'
});

const TablaVotos = () => {
  const [votos, setVotos] = useState([]);

  useEffect(() => {
    connection.connect();
    connection.query('SELECT * FROM acumulacion_votos', (error, results) => {
      if (error) throw error;
      setVotos(results);
    });
    connection.end();
  }, []);

  return (
    <div>
      <h2>Tabla de Acumulación de Votos</h2>
      <table>
        <thead>
          <tr>
            <th>Número de Candidato</th>
            <th>Total de Votos</th>
          </tr>
        </thead>
        <tbody>
          {votos.map((voto) => (
            <tr key={voto.NUMERO_CANDIDATO}>
              <td>{voto.NUMERO_CANDIDATO}</td>
              <td>{voto.total_votos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaVotos;
