CREATE TABLE Movies(
  Movie_title VARCHAR (20),
  Movie_year YEAR,
  Lenght TIME,
  Genre ENUM('drama','scifi','comedy')
);

INSERT INTO Movies VALUES
('Gone with the wind',1939,'03:51','1'),
('Star Wars',1977, '02:04','2'),
('Wayne\'s World', 1992,'01:35','3');


