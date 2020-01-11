DROP DATABASE IF EXISTS hackprac;
CREATE DATABASE hackprac;
\c hackprac

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS content;

CREATE TABLE users(
    id              SERIAL PRIMARY KEY, 
    username        VARCHAR(50),
    password        VARCHAR(50)
);

CREATE TABLE content(
    id              SERIAL PRIMARY KEY, 
    username        INTEGER REFERENCES users(id),
    videoURL        VARCHAR(200),
    mp3             VARCHAR(200),
);


