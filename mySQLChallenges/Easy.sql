DROP DATABASE IF EXISTS books;

CREATE DATABASE books;

USE books;

CREATE TABLE booksList (title varchar (255), publishDate varchar(255), author varchar(255));

INSERT INTO booksList (title, publishDate, author)
VALUES ("Harry Potter 3", "7/8/1999", "J.K Rowling"),
("Harry Potter 4", "2000", "J.K Rowling"),
("Harry Potter 7", "7/21/2007", "J.K Rowling"),
("Percy Jackson: The Battle of The Labrinth", "2008", "Rick Riordan"),
("Beautiful Boy: A Father's Journey Through His Son's Addiction", "2/1/2008", "David Sheff");

INSERT INTO booksList (title, publishDate, author)
VALUES ("Hatchet", "11/1/1986", "Gary Paulson"),
("The Matian", "2011", "Andy Weir");

DELETE FROM booksList
WHERE publishDate = "7/8/1999";

SELECT * FROM booksList;