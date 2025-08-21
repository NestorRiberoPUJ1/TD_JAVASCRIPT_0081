

/* 
 * --ESTRUCTURA BÁSICA DE UNA PETICIÓN-- 
 * SELECT columnas, valores computados, separados por coma menos el ultimo
 * FROM nombre_tabla
 * WHERE condiciones de busqueda
 */ 


SELECT * FROM Customer;

SELECT FirstName, LastName, Country, City
FROM Customer
WHERE (Country = "USA" OR Country = "India")
AND FirstName ="Frank"
;


SELECT FirstName, LastName, Country, City
FROM Customer
WHERE Not Country = "USA";


SELECT * FROM Customer WHERE CustomerId=14;

SELECT * 
FROM Customer 
WHERE FirstName LIKE '%ra%'
AND Country IN ("USA","Canada")
;

/*
 * --UNIONES ENTRE TABLAS (JOIN)--
 * SELECT tabla.nombreColumna, valores computados, separados por coma menos el ultimo
 * FROM nombre_tabla
 * JOIN tabla_tercera ON condicion union (fk=pk)
 * (tabla_actual.llave foranea  = tabla_tercera.llave primaria)
 * WHERE condiciones de busqueda
 * 
 */


SELECT * 
FROM Artist
JOIN Album ON Artist.ArtistId = Album.ArtistId
ORDER BY Artist.Name
;



SELECT Customer.*
FROM Customer
;

SELECT Employee.*
FROM Customer
JOIN Employee ON Customer.SupportRepId  =Employee.EmployeeId 
;



SELECT * FROM Invoice
WHERE total > (SELECT AVG(total) FROM Invoice c) ;