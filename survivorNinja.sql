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
VALUES ("What is a Hurricane?", 4);

INSERT INTO questions (quiz, answer)
VALUES ("What is a Hurricane Season and when does it happen?",5);

INSERT INTO questions (quiz, answer)
VALUES ("How does a hurricane form?", 2 );

INSERT INTO questions (quiz, answer)
VALUES ("Who does the hurricane affect?", 5 );

INSERT INTO questions (quiz, answer)
VALUES ("What kind of damages can they cause?", 1);

INSERT INTO questions (quiz, answer)
VALUES ("What supplies will I need?",3);

INSERT INTO questions (quiz, answer)
VALUES ("How do we know where to go?", 3);

INSERT INTO questions (quiz, answer)
VALUES ("What are hurricane escape routes?", 2);


SELECT * FROM questions;
