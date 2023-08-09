/*
import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localhost',
  user: 'root',
  database: 'tarea1'
};

async function createDatabaseConnection() {
  const connection = await mysql.createConnection(dbConfig);
  return connection;
}

export default createDatabaseConnection();
*/

import { createPool }from 'mysql2/promise';

export async function conect() {
    const connection = await createPool({
        host :  'localhost',
        user : 'root' ,
        database: 'tarea1'
    })   
    return connection;
}

