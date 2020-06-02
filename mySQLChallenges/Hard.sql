DROP DATABASE IF EXISTS movies;

CREATE DATABASE movies;

USE movies;

CREATE TABLE moviesList(title varchar(255), releaseDate varchar(255), rating INT);

INSERT INTO moviesList(title, releaseDate, rating)
VALUES('Avengers: Endgame','2019', 8.4),
('Uncut Gems','2019', 7.5),
('SCOOB!','2020', 5.8),
('Avengers: Infinity War','2018', 8.5),
('Focus','2015', 6.6);

ALTER TABLE moviesList
add firstName varchar(255);

ALTER TABLE moviesList
add LastName varchar(255);

SELECT * FROM moviesList;

UPDATE moviesList
SET LastName = 'Russo', FirstName = 'Joe'
WHERE title = "Avengers: Endgame";

UPDATE moviesList
SET LastName = 'Safdie', FirstName = 'Josh'
WHERE title = "Uncut Gems";

UPDATE moviesList
SET LastName = 'Cervone', FirstName = 'Tony'
WHERE title = "SCOOB!";

UPDATE moviesList
SET LastName = 'Russo', FirstName = 'Anthony'
WHERE title = "Avengers: Infinity War";

UPDATE moviesList
SET LastName = 'Ficarra', FirstName = 'Glenn'
WHERE title = "Focus";

SELECT * FROM moviesList;

SELECT CONCAT(firstName, ' ', LastName) FROM moviesList;

SELECT * FROM Movies ORDER BY LastName ASC;

DELETE FROM moviesList WHERE RIGHT(LastName,1) BETWEEN 'r' AND 'z';

SELECT * FROM moviesList LIMIT 3;