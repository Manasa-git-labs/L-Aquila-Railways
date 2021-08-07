-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: train_ticket_booking
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `class`
--

DROP TABLE IF EXISTS `class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `class` (
  `id` int NOT NULL,
  `classType` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` VALUES (1,'ECONOMY'),(2,'FIRST CLASS');
/*!40000 ALTER TABLE `class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gender`
--

DROP TABLE IF EXISTS `gender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gender` (
  `id` int NOT NULL,
  `gender` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idgender_UNIQUE` (`id`),
  UNIQUE KEY `gender_UNIQUE` (`gender`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gender`
--

LOCK TABLES `gender` WRITE;
/*!40000 ALTER TABLE `gender` DISABLE KEYS */;
INSERT INTO `gender` VALUES (2,'F'),(1,'M');
/*!40000 ALTER TABLE `gender` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `groups` (
  `id` int NOT NULL,
  `group` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `itinerary`
--

DROP TABLE IF EXISTS `itinerary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `itinerary` (
  `id` int NOT NULL,
  `from` varchar(45) NOT NULL,
  `to` varchar(45) NOT NULL,
  `arrivalTime` datetime NOT NULL,
  `departureTime` datetime NOT NULL,
  `idtrain` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `iditinerary_UNIQUE` (`id`),
  KEY `idtrain_idx` (`idtrain`),
  CONSTRAINT `idtrain` FOREIGN KEY (`idtrain`) REFERENCES `trains` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itinerary`
--

LOCK TABLES `itinerary` WRITE;
/*!40000 ALTER TABLE `itinerary` DISABLE KEYS */;
INSERT INTO `itinerary` VALUES (1,'Rome','Florence','2021-08-05 16:00:00','2021-08-05 12:00:00',1),(2,'Rome','Florence','2021-08-05 12:00:00','2021-08-05 08:00:00',1),(3,'Rome','Bologna','2021-08-05 12:30:00','2021-08-05 07:00:00',2),(4,'Rome','Bologna','2021-08-05 15:00:00','2021-08-05 11:30:00',2),(5,'Rome','Bologna','2021-08-05 20:00:00','2021-08-05 16:00:00',2),(6,'Rome','Bologna','2021-08-05 23:00:00','2021-08-05 19:30:00',2),(7,'Bologna','Milan','2021-08-05 05:00:00','2021-08-05 04:00:00',3),(8,'Bologna','Milan','2021-08-05 08:00:00','2021-08-05 07:00:00',3),(9,'Bologna','Milan','2021-08-05 09:00:00','2021-08-05 07:30:00',3),(10,'Bologna','Milan','2021-08-05 12:00:00','2021-08-05 11:00:00',3),(11,'Bologna','Milan','2021-08-05 17:00:00','2021-08-05 15:45:00',3),(12,'Milan','Turin','2021-08-05 07:00:00','2021-08-05 05:00:00',4),(13,'Milan','Turin','2021-08-05 09:00:00','2021-08-05 08:00:00',4),(14,'Milan','Turin','2021-08-05 12:45:00','2021-08-05 11:00:00',4),(15,'Milan','Turin','2021-08-05 16:00:00','2021-08-05 15:00:00',4),(16,'Milan','Turin','2021-08-05 20:10:00','2021-08-05 18:00:00',4),(17,'Milan','Turin','2021-08-05 22:30:00','2021-08-05 21:00:00',4),(18,'Milan','Lecce','2021-08-05 08:30:00','2021-08-05 00:30:00',5),(19,'Milan','Lecce','2021-08-05 14:30:00','2021-08-05 06:00:00',5),(20,'Milan','Lecce','2021-08-05 23:30:00','2021-08-05 15:15:00',5);
/*!40000 ALTER TABLE `itinerary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tickets`
--

DROP TABLE IF EXISTS `tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tickets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `noOfPeople` int NOT NULL,
  `price` float NOT NULL,
  `idclass` int NOT NULL,
  `iditinerary` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idtickets_UNIQUE` (`id`),
  KEY `iditinerary_idx` (`iditinerary`),
  KEY `idclass_idx` (`idclass`),
  CONSTRAINT `idclass` FOREIGN KEY (`idclass`) REFERENCES `class` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `iditinerary` FOREIGN KEY (`iditinerary`) REFERENCES `itinerary` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
INSERT INTO `tickets` VALUES (1,0,45,1,1),(2,0,90,2,1),(3,0,45,1,2),(4,0,90,2,2),(5,0,60,1,3),(6,0,120,2,3),(7,0,60,1,4),(8,0,120,2,4),(9,0,60,1,5),(10,0,120,2,5),(11,0,60,1,6),(12,0,120,2,6),(13,0,35,1,7),(14,0,70,2,7),(15,0,35,1,8),(16,0,70,2,8),(17,0,35,1,9),(18,0,70,2,9),(19,0,35,1,10),(20,0,70,2,10),(21,0,35,1,11),(22,0,70,2,11),(23,0,40,1,12),(24,0,80,2,12),(25,0,40,1,13),(26,0,80,2,13),(27,0,40,1,14),(28,0,80,2,14),(29,0,40,1,15),(30,0,80,2,15),(31,0,40,1,16),(32,0,80,2,16),(33,0,40,1,17),(34,0,80,2,17),(35,0,100,1,18),(36,0,200,2,18),(37,0,100,1,19),(38,0,200,2,19),(39,0,100,1,20),(40,0,200,2,20);
/*!40000 ALTER TABLE `tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trains`
--

DROP TABLE IF EXISTS `trains`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trains` (
  `id` int NOT NULL AUTO_INCREMENT,
  `trainNo` int NOT NULL,
  `capacity` int NOT NULL,
  `trainName` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `trainNo_UNIQUE` (`trainNo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trains`
--

LOCK TABLES `trains` WRITE;
/*!40000 ALTER TABLE `trains` DISABLE KEYS */;
INSERT INTO `trains` VALUES (1,1023,70,'RO-FLO'),(2,2100,100,'RO-BOL'),(3,2430,85,'BOL-MI'),(4,3500,150,'MI-TUR'),(5,2750,400,'MI-LEC');
/*!40000 ALTER TABLE `trains` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `age` int NOT NULL,
  `gender` varchar(45) NOT NULL,
  `address` varchar(45) DEFAULT NULL,
  `groupid` int NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idUser_UNIQUE` (`id`),
  KEY `groupid_idx` (`groupid`),
  KEY `gender_idx` (`gender`),
  CONSTRAINT `gender` FOREIGN KEY (`gender`) REFERENCES `gender` (`gender`),
  CONSTRAINT `groupid` FOREIGN KEY (`groupid`) REFERENCES `groups` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'John','Red',28,'M','First Street',2,'John1','password');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertickets`
--

DROP TABLE IF EXISTS `usertickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usertickets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `iduser` int NOT NULL,
  `idticket` int NOT NULL,
  `seat` varchar(45) DEFAULT NULL,
  `status` varchar(45) NOT NULL,
  `bookDate` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idusertickets_UNIQUE` (`id`),
  KEY `iduser_idx` (`iduser`),
  KEY `idticket_idx` (`idticket`),
  CONSTRAINT `idticket` FOREIGN KEY (`idticket`) REFERENCES `tickets` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `iduser` FOREIGN KEY (`iduser`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertickets`
--

LOCK TABLES `usertickets` WRITE;
/*!40000 ALTER TABLE `usertickets` DISABLE KEYS */;
INSERT INTO `usertickets` VALUES (1,1,1,'4','PAYED','0000-00-00 00:00:00'),(3,1,2,'24','PAYED','0000-00-00 00:00:00'),(5,1,2,'7','PAYED','2021-06-24 19:54:28'),(7,1,2,'10','Waiting for the payment...','2021-06-24 19:56:30');
/*!40000 ALTER TABLE `usertickets` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-07 13:15:07
