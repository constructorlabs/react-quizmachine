CREATE DATABASE quiz_app;

CREATE TABLE "user" (
  id SERIAL PRIMARY KEY,
  username varchar(100) NOT NULL UNIQUE,
  password text NOT NULL
); 

CREATE TABLE session (
  id SERIAL PRIMARY KEY,
  user_id INT,
  difficulty VARCHAR(30) NOT NULL,
  trivia_type VARCHAR(30) NOT NULL,
  category VARCHAR(30) NOT NULL,
  start_date TIMESTAMP WITH TIME ZONE,
  end_date TIMESTAMP WITH TIME ZONE,
  score INT,
  FOREIGN KEY (user_id) REFERENCES "user" (id)
);