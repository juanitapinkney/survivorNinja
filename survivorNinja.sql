DROP DATABASE   survivorNinja;
CREATE DATABASE survivorNinja;


USE survivorNinja;

CREATE TABLE questions (

  id INT NOT NULL AUTO_INCREMENT,
  quiz VARCHAR(300) NOT NULL,
  answer INT default 0,
    
  PRIMARY KEY (id)
);

INSERT INTO questions (quiz, answer)
VALUES ("What is a Hurricane?", 3);

INSERT INTO questions (quiz, answer)
VALUES ("What is a Hurricane Season?",3);

INSERT INTO questions (quiz, answer)
VALUES ("How does a hurricane form?", 2 );


SELECT * FROM questions;
