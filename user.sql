
DROP Database dreamiverse;

CREATE DATABASE dreamiverse;

USE dreamiverse;

CREATE TABLE user( 
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`username`  VARCHAR(50) NOT NULL , 
	`password` VARCHAR(60) NOT NULL,  
	`email` VARCHAR(100)  NOT NULL, 
	`personnality` VARCHAR(60) NULL ,
	`favorite` VARCHAR(60) NULL); 

INSERT INTO user( username, password , email ) VALUES ('TOTO','mdp', 'testemail@test.com'), ('admin','admin', 'testemail@test.com');