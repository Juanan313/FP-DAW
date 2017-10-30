CREATE TABLE Rolplaying_books(
  Name VARCHAR(20),
  Publisher (8)
  Who_updated VARCHAR(8),
  Pages  INT,
  Date_updated DATE, 
  Price DECIMAL (4,2), 
  PDF BOOL,
  
);

INSERT INTO Rolplaying_books VALUES 
('Anima BF','Edge','Juanan',499,'10-01-03',44.95,true),
('Werewoolf, apocalypse','Nosolorol','Juanan',398,'16-02-12',39.95,true),
('D&D 3.5','Wizards of the coast','Javi Nieto',299,'09-05-23',40.00,true),
('Vampire edad oscura','Factoria de ideas','Alex',269,'10-06-17',34.95,false),
('Vampire the masquerade','Nosolorol','Juakin',448,'15-09-03',49.95,true),
('Pathfinder','Devir','Xavier',399,'17-05-29',34.95,true);
