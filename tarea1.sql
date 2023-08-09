drop database if exists tarea1;
CREATE database tarea1;

use tarea1;

CREATE TABLE votos (
CORREO VARCHAR(40) NOT NULL PRIMARY KEY,
NUMERO_CANDIDATO int NOT NULL
);
INSERT INTO votos VALUES ('aapazaquis@unsa.edu.pe',1);
INSERT INTO votos VALUES ('larredondo@unsa.edu.pe',2);
INSERT INTO votos VALUES ('jcacerescu@unsa.edu.pe',3);
INSERT INTO votos VALUES ('rcerpa@unsa.edu.pe',2);
INSERT INTO votos VALUES ('jchancayauris@unsa.edu.pe',3);
INSERT INTO votos VALUES ('acruzch@unsa.edu.pe',1);
INSERT INTO votos VALUES ('adelgadoj@unsa.edu.pe',1);


CREATE TABLE acumulacion_votos AS
SELECT NUMERO_CANDIDATO, COUNT(*) AS total_votos
FROM votos
GROUP BY NUMERO_CANDIDATO;

SELECT * FROM acumulacion_votos;
