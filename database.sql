CREATE DATABASE quiz_app;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username varchar(100) NOT NULL UNIQUE,
password text NOT NULL
); 