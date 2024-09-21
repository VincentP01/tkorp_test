CREATE DATABASE tkorp_test;

USE tkorp_test;

CREATE TABLE person (
  id INT AUTO_INCREMENT PRIMARY KEY,
  lastName VARCHAR(100) NOT NULL,
  firstName VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phoneNumber VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE animal (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  dateOfBirth DATE NOT NULL,
  species VARCHAR(100) NOT null,
  breed text,
  color varchar(50),
  weight int,
  ownerId int,
  FOREIGN KEY (ownerId) REFERENCES person(id)
);