DROP DATABASE IF EXISTS movies;

CREATE DATABASE movies;

USE movies;

CREATE TABLE moviesList (title varchar (255), releaseDate varchar(255), rating INT;

INSERT INTO moviesList (title, releaseDate, rating)
VALUES ("Avengers: Infinity War", "4/27/2018", "8.5/10"),
("Harry Potter: Deathly Hallows-Part 2", "7/15/2011", "8.1/10"),
("The Equalizer", "7/20/2018" ,"6.7/10"),
("Avengers: Endgame", "4/26/2019", "8.4/10"),
("Alita Battle Angel", "2/14/2019", "7.3/10"),
("John Wick: Chapter 3-Parabellum", "5/17/2019", "7.5/10"),
("The Hobbit: An Unexpected Journey", "12/6/2012", "7.8/10"),
("Lord of The Rings: The Return of The King", "12/17/2003", "8.9/10"),
("Project Almanac", "1/28/2015", "6.4/10"),
("Justice League: The Flashpoint Paradox", "7//30/2013", "8/10");

SELECT * FROM moviesList
ORDER BY releaseDate;