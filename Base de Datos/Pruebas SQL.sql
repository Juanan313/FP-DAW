CREATE TABLE Showroom (
  Reg_code VARCHAR(8),
  Make     VARCHAR(8),
  Model    VARCHAR(8), 
Date_registered DATE, 
  Price INT, 
  Taxed BOOL
);

INSERT INTO Showroom VALUES 
('R623 PHM','Ford','Fiesta','98-01-01',6800,true),
('P887 LHW','Rover','200','97-03-01',7500,true),
('P812 WHJ','Peugeot','406','96-09-01',7000,true),
('X842 PLD','Ford','Mondeo','96-01-01',8100,false),
('T419 PCP','Citroen','C4','99-09-01',6000,True);


CREATE TABLE Presence (
  Student_name VARCHAR(20),
  Present VARCHAR(3),
  Absence_authorized VARCHAR(3)
);

INSERT INTO Presence VALUES ('Stef','Yes','');
INSERT INTO Presence VALUES ('Jamal','Yes','');
INSERT INTO Presence VALUES ('Adam','Yes','');
INSERT INTO Presence VALUES ('Kieran','Yes','');
INSERT INTO Presence VALUES ('Dylan','Yes','');
INSERT INTO Presence VALUES ('Sophie','No','Yes');
INSERT INTO Presence VALUES ('Max','No','No');