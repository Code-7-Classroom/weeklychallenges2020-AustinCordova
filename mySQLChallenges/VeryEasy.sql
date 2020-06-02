DROP DATABASE IF EXISTS cars;

CREATE DATABASE cars;

USE cars;

CREATE TABLE carsList (make varchar (255), model varchar(255), Year int);

INSERT INTO carsList (make, model, Year)
VALUES ("Ford", "Focus", 2003),
("Mini", "Cooper", 2020),
("Lexus", "RX", 2020);

INSERT INTO carsList (make, model, Year)
VALUES ("Mercedes-Benz", "A-Class", 2020),
("BMW", "3 Series", 2020);

SELECT * FROM carsList;

