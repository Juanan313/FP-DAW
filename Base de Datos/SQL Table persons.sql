 CREATE TABLE Persons (
	Name VARCHAR(10),
	FName VARCHAR(10),
	City INTEGER,
	Age INTEGER,
	Salary INTEGER);
	
INSERT INTO Persons VALUES
	('Smith','John',3,35,280),
	('Doe','Jane',1,28,325),
	('Brown','Scott',3,41,265),
	('Howard','Shemp',4,48,359),
	('Taylor','Tom',2,22,250);
ALTER TABLE Persons DROP City;
DROP TABLE Persons

SELECT Name,FName,City FROM Persons WHERE Age >40;
SELECT * FROM Persons WHERE Salary BETWEEN 250 AND 350;
SELECT FName FROM Persons WHERE Name ='Smith';
SELECT Name,FName FROM Persons WHERE FName LIKE 'J%' ORDER BY Name;
SELECT concat('$',Salary) as Sueldo FROM Persons 