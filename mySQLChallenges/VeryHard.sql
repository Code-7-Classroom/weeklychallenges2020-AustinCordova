DROP DATABASE IF EXISTS cars;

CREATE DATABASE cars;

USE cars;

show tables;
;

CREATE TABLE carsList (
    Id INT auto_increment PRIMARY KEY,
    Make VARCHAR(20),
    Model VARCHAR(20),
    Year INT
);

INSERT INTO carsList(Make, Model, Year)
values('Ford','Focus',2003),
('Mini','Cooper',2020),
('Lexus','RX',2020);

SELECT * FROM carsList;

ALTER TABLE carsList ADD Price int;

ALTER TABLE carsList ADD Color varchar(30);

UPDATE carsList SET Price = 13150 WHERE Id = 1;

UPDATE carsList SET Price = 23400 WHERE Id = 2;

UPDATE carsList SET Price = 44150 WHERE Id = 3;

UPDATE carsList SET Color = 'Blue' WHERE Id = 1;

UPDATE carsList SET Color = 'White' WHERE Id = 2;

UPDATE carsList SET Color = 'Black' WHERE Id = 3;

SELECT CONCAT(Make, ' ', Model) FROM carsList;
