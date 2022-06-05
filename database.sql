
-- Create Postgres Database named rmis 
CREATE DATABASE rmis;

-- Create the users table
CREATE TABLE users (id INT GENERATED ALWAYS AS IDENTITY, name VARCHAR(100) NOT NULL);
