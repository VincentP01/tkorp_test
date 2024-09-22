USE tkorp_test;

CREATE TABLE animal (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  dateOfBirth DATE,
  species VARCHAR(100),
  breed text,
  color varchar(50),
  weight int,
  ownerId int,
  FOREIGN KEY (ownerId) REFERENCES person(id)
);