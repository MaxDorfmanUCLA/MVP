DROP DATABASE IF EXISTS hackprac;
CREATE DATABASE hackprac;
\c hackprac

DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id              SERIAL PRIMARY KEY, 
    username        VARCHAR(50),
    password        VARCHAR(50)
);


