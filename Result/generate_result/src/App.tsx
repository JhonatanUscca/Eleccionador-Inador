import React, { useState, useEffect } from 'react';
import mysql from 'mysql2';

const TablaVotos = () => {
  const [data, setData] = useState([]);

useEffect(() => {
  const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'tarea1'
  });

  connection.connect();

  connection.query('SELECT * FROM acumulacion_votos', (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
    } else {
      const formattedData = results.map(result => ({
        NUMERO_CANDIDATO: result.NUMERO_CANDIDATO,
        total_votos: result.total_votos
      }));
      setData(formattedData);
    }
  });

  connection.end();
  }, []);


  const columns = [
    { Header: 'Número de Candidato', accessor: 'NUMERO_CANDIDATO' },
    { Header: 'Total de Votos', accessor: 'total_votos' }
  ];

  return (
    <div>
      <h2>Tabla de Acumulación de Votos</h2>
      <table>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.accessor}>{column.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map(column => (
                <td key={column.accessor}>{row[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaVotos;
