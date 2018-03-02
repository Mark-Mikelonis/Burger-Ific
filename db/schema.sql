DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;


CREATE TABLE burgers(
    id INTEGER(20) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    date TIMESTAMP,
    PRIMARY KEY(id) 
);