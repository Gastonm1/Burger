##
Schema
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
    id INTEGER(11)
    AUTO_INCREMENT NOT NULL,
    burger_name varchar
    (255) NOT NULL,
    devoured BOOLEAN DEFAULT true,
    PRIMARY KEY
    (id) 
);
