
-- Host: localhost    Database: villains


DROP TABLE IF EXISTS `disneyVillains`;

CREATE TABLE `disneyVillains` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `movie` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) 


INSERT INTO `disneyVillains` VALUES (1,'Captain','Peter Pan','captain-hook','2021-05-09 14:09:10','2021-05-09 14:09:10',NULL),(2,'Cruella de vil','One Hundred and one Damaltians','cruella-de-vil','2021-05-09 14:09:10','2021-05-09 14:09:10',NULL),(3,'Gaston','Beauty and the Beast','gaston','2021-05-09 14:09:10','2021-05-09 14:09:10',NULL),(4,'Hades','Hercules','hades','2021-05-09 14:09:10','2021-05-09 14:09:10',NULL),(5,'Horned King','The Black Cauldron','horned-king','2021-05-09 14:09:10','2021-05-09 14:09:10',NULL),(6,'Jafar','Alladin','jafar','2021-05-09 14:09:10','2021-05-09 14:09:10',NULL),(7,'Lady Tremaine','Cinderella','lady-tremaine','2021-05-09 14:09:10','2021-05-09 14:09:10',NULL),(8,'Madam Medusa','The rescuers','madame-medusa','2021-05-09 14:09:10','2021-05-09 14:09:10',NULL),(9,'Madam Mim','The Sword in the Stone','madame-mim','2021-05-09 14:09:10','2021-05-09 14:09:10',NULL),(10,'Maleficent','Sleeping Beauty','maleficent','2021-05-09 14:09:10','2021-05-09 14:09:10',NULL),(11,'Prince John','Robin Hood','prince-john','2021-05-09 14:09:10','2021-05-09 14:09:10',NULL),(12,'Sir Hiss','Robin Hood','sior-hiss','2021-05-09 14:09:10','2021-05-09 14:09:10',NULL),(13,'Queen Grimhilde','Snow White and the Seven Dwarfs','queen-grimhilde','2021-05-09 14:09:10','2021-05-09 14:09:10',NULL),(14,'Queen of Hearts','Alice in Wonderland','queen-of-hearts','2021-05-09 14:09:10','2021-05-09 14:09:10',NULL),(15,'Scar','The Lion King','scar','2021-05-09 14:09:10','2021-05-09 14:09:10',NULL),(16,'Shan Yu','Mulan','shan-yu','2021-05-09 14:09:10','2021-05-09 14:09:10',NULL),(17,'Shere Khan','The Jungle Book','shere-khan','2021-05-09 14:09:10','2021-05-09 14:09:10',NULL),(18,'Ursula','The Little Mermaid','Ursula','2021-05-09 14:09:10','2021-05-09 14:09:10',NULL);