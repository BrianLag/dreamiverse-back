

CREATE TABLE library( 
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`miniature` VARCHAR(450) NOT NULL, 
	`name` VARCHAR(60) NOT NULL,  
	`date` VARCHAR(50) NULL, 
	`type` VARCHAR(60) NOT NULL ,
	`favorite` VARCHAR(60) NULL,
  `like` INT NULL);


INSERT INTO library( miniature, name , type ) VALUES ('https://img.gaming.gentside.com/article/dreams/dreams-ps4-date-de-sortie-trailers-news-et-gameplay-du-nouveau-jeu-bac-a-sable_6e31a9ded8bd90e50168bcdc80520c52d7fce6f3.jpg', 'Pic Pic', 'jeu'), ('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiziXeuPn2EO_nZfFPSooOt1wqrMtA3aUtQA&usqp=CAU', 'DreamFantasy 7', 'jeu');