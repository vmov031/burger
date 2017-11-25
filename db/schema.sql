CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id int AUTO_INCREMENT,
burger_name VARCHAR(100),
devoured BIT DEFAULT 1 NOT NULL,
date_created DATETIME NOT NULL,
PRIMARY KEY(id)
);