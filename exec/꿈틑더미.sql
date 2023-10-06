CREATE DATABASE  IF NOT EXISTS `dream` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `dream`;
-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: 3.35.166.128    Database: dream
-- ------------------------------------------------------
-- Server version	8.0.34-0ubuntu0.20.04.1

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
-- Table structure for table `auction`
--

DROP TABLE IF EXISTS `auction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auction` (
  `auction_id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `asking_money` int NOT NULL,
  `ended_at` datetime(6) DEFAULT NULL,
  `immediately_buy_money` int NOT NULL,
  `start_auction_money` int NOT NULL,
  `dream_card_id` bigint DEFAULT NULL,
  PRIMARY KEY (`auction_id`),
  KEY `FKp7eois6objwhao6aivm3cojkm` (`dream_card_id`),
  CONSTRAINT `FKp7eois6objwhao6aivm3cojkm` FOREIGN KEY (`dream_card_id`) REFERENCES `dream_card` (`dream_card_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auction`
--

LOCK TABLES `auction` WRITE;
/*!40000 ALTER TABLE `auction` DISABLE KEYS */;
INSERT INTO `auction` VALUES (1,'2023-10-05 17:24:49.126497',100,'2023-10-07 02:24:40.000000',100000,1000,19),(2,'2023-10-05 17:26:19.715523',0,'2023-10-07 02:26:10.000000',30000,1000,18),(3,'2023-10-05 17:26:46.254871',0,'2023-10-07 02:26:37.000000',200000,1000,12),(4,'2023-10-05 17:35:18.341004',100,'2023-10-07 02:35:18.000000',5000,1000,22),(5,'2023-10-05 17:43:04.549285',0,'2023-10-07 02:43:04.000000',50000,1000,23),(6,'2023-10-05 17:43:19.178404',100,'2023-10-07 02:43:08.000000',200000,1000,24),(7,'2023-10-05 18:42:00.869357',0,'2023-10-07 03:41:46.000000',20000,1000,25),(8,'2023-10-06 00:17:52.653023',100,'2023-10-07 09:17:52.000000',5000,1000,27),(9,'2023-10-06 01:46:19.911891',100,'2023-10-07 10:46:19.000000',5000,1000,35);
/*!40000 ALTER TABLE `auction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `badge`
--

DROP TABLE IF EXISTS `badge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `badge` (
  `badge_id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `complete_days` bigint NOT NULL,
  `challenge_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`badge_id`),
  KEY `FKtdiqm83pqpdp3xdfm6ds64sil` (`challenge_id`),
  KEY `FK4aamfo6o0h5ejqjn40fv40jdw` (`user_id`),
  CONSTRAINT `FK4aamfo6o0h5ejqjn40fv40jdw` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKtdiqm83pqpdp3xdfm6ds64sil` FOREIGN KEY (`challenge_id`) REFERENCES `challenge` (`challenge_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `badge`
--

LOCK TABLES `badge` WRITE;
/*!40000 ALTER TABLE `badge` DISABLE KEYS */;
/*!40000 ALTER TABLE `badge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bidding`
--

DROP TABLE IF EXISTS `bidding`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bidding` (
  `bidding_id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `bidding_money` int NOT NULL,
  `auction_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`bidding_id`),
  KEY `FKokx9n5urg6sfrmg5afhk29dm` (`auction_id`),
  KEY `FKeyp19ckyartk0hcox1hn7gu6s` (`user_id`),
  CONSTRAINT `FKeyp19ckyartk0hcox1hn7gu6s` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKokx9n5urg6sfrmg5afhk29dm` FOREIGN KEY (`auction_id`) REFERENCES `auction` (`auction_id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bidding`
--

LOCK TABLES `bidding` WRITE;
/*!40000 ALTER TABLE `bidding` DISABLE KEYS */;
INSERT INTO `bidding` VALUES (1,'2023-10-05 17:24:49.132281',1000,1,3),(2,'2023-10-05 17:26:19.717289',1000,2,3),(3,'2023-10-05 17:26:46.256592',1000,3,3),(4,'2023-10-05 17:35:18.342878',1000,4,2),(5,'2023-10-05 17:38:36.404515',1700,3,2),(6,'2023-10-05 17:38:41.587621',1900,3,2),(7,'2023-10-05 17:43:04.550927',1000,5,1),(8,'2023-10-05 17:43:19.180219',1000,6,3),(9,'2023-10-05 17:44:28.507621',1100,6,3),(10,'2023-10-05 17:44:32.761837',1300,6,3),(11,'2023-10-05 17:44:36.149834',1500,6,3),(12,'2023-10-05 17:44:48.233008',1700,6,3),(13,'2023-10-05 17:44:53.781422',1800,6,2),(14,'2023-10-05 17:44:56.676925',2900,6,3),(15,'2023-10-05 17:45:02.092318',3600,6,3),(16,'2023-10-05 17:45:09.629202',4500,6,3),(17,'2023-10-05 18:25:50.956578',1500,2,3),(18,'2023-10-05 18:26:00.905763',30000,2,3),(19,'2023-10-05 18:42:00.870919',1000,7,3),(20,'2023-10-05 18:42:27.099639',2000,7,3),(21,'2023-10-05 18:42:33.481816',5000,7,3),(22,'2023-10-05 18:43:46.055452',20000,7,3),(23,'2023-10-06 00:17:52.657063',1000,8,2),(24,'2023-10-06 00:18:12.920558',4700,6,2),(25,'2023-10-06 00:18:48.208594',200000,3,2),(26,'2023-10-06 00:48:33.411759',4800,6,3),(27,'2023-10-06 00:52:41.510680',5300,6,3),(28,'2023-10-06 00:55:06.983274',5800,6,3),(29,'2023-10-06 01:28:21.572359',6000,6,3),(30,'2023-10-06 01:41:51.307871',7000,6,3),(31,'2023-10-06 01:42:25.366532',8000,6,1),(32,'2023-10-06 01:46:19.915342',1000,9,2),(33,'2023-10-06 01:46:37.239971',8600,6,3),(34,'2023-10-06 01:46:39.362930',8900,6,2),(35,'2023-10-06 01:46:42.561149',9300,6,3),(36,'2023-10-06 01:46:47.022849',12000,6,1),(37,'2023-10-06 01:46:50.887152',12900,6,3),(38,'2023-10-06 01:47:02.717347',50000,5,2);
/*!40000 ALTER TABLE `bidding` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_keyword`
--

DROP TABLE IF EXISTS `card_keyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card_keyword` (
  `card_keyword_id` bigint NOT NULL AUTO_INCREMENT,
  `card_id` bigint DEFAULT NULL,
  `keyword_id` bigint DEFAULT NULL,
  PRIMARY KEY (`card_keyword_id`),
  KEY `FKtihwigptq5q0gk6sk3xy9sjd0` (`card_id`),
  KEY `FKj0cyi6vr9lnnfq10joivnox3i` (`keyword_id`),
  CONSTRAINT `FKj0cyi6vr9lnnfq10joivnox3i` FOREIGN KEY (`keyword_id`) REFERENCES `dream_keyword` (`keyword_id`),
  CONSTRAINT `FKtihwigptq5q0gk6sk3xy9sjd0` FOREIGN KEY (`card_id`) REFERENCES `dream_card` (`dream_card_id`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_keyword`
--

LOCK TABLES `card_keyword` WRITE;
/*!40000 ALTER TABLE `card_keyword` DISABLE KEYS */;
INSERT INTO `card_keyword` VALUES (1,1,2),(2,1,3),(3,1,6),(4,2,4),(5,2,5),(6,2,9),(7,3,1),(8,3,4),(9,3,5),(10,4,2),(11,4,7),(12,4,9),(13,5,3),(14,5,7),(15,5,9),(16,6,1),(17,6,8),(18,6,9),(19,7,3),(20,7,4),(21,7,7),(22,8,1),(23,8,2),(24,8,9),(25,9,3),(26,9,4),(27,9,5),(28,10,1),(29,10,4),(30,10,7),(31,11,3),(32,11,4),(33,11,7),(34,12,5),(35,12,6),(36,12,7),(37,13,1),(38,13,3),(39,13,5),(40,14,2),(41,14,4),(42,14,9),(43,15,1),(44,15,4),(45,15,9),(46,16,3),(47,16,5),(48,16,9),(49,17,3),(50,17,6),(51,17,7),(52,18,1),(53,18,2),(54,18,7),(55,19,4),(56,19,8),(57,19,9),(58,20,2),(59,20,3),(60,20,5),(61,21,2),(62,21,6),(63,21,8),(64,22,2),(65,22,7),(66,22,9),(67,23,1),(68,23,5),(69,23,7),(70,24,3),(71,24,6),(72,24,7),(73,25,2),(74,25,6),(75,25,9),(76,26,2),(77,26,6),(78,26,8),(79,27,1),(80,27,8),(81,27,9),(85,29,4),(86,29,5),(87,29,9),(88,30,1),(89,30,3),(90,30,6),(91,31,5),(92,31,7),(93,31,8),(94,32,2),(95,32,5),(96,32,6),(97,33,1),(98,33,8),(99,33,9),(100,34,1),(101,34,2),(102,34,7),(103,35,4),(104,35,5),(105,35,7),(106,36,2),(107,36,3),(108,36,6),(109,37,3),(110,37,7),(111,37,8),(112,38,1),(113,38,4),(114,38,9);
/*!40000 ALTER TABLE `card_keyword` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `challenge`
--

DROP TABLE IF EXISTS `challenge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `challenge` (
  `challenge_id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `badge_url` varchar(255) DEFAULT NULL,
  `challenge_content` varchar(255) DEFAULT NULL,
  `challenge_title` varchar(255) DEFAULT NULL,
  `hits` bigint NOT NULL,
  `period` varchar(255) DEFAULT NULL,
  `time_capsule_open_at` int NOT NULL,
  `owner` bigint DEFAULT NULL,
  PRIMARY KEY (`challenge_id`),
  KEY `FKo778ksurwrsgyipyonf9003va` (`owner`),
  CONSTRAINT `FKo778ksurwrsgyipyonf9003va` FOREIGN KEY (`owner`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `challenge`
--

LOCK TABLES `challenge` WRITE;
/*!40000 ALTER TABLE `challenge` DISABLE KEYS */;
INSERT INTO `challenge` VALUES (1,'2023-10-05 16:06:33.354136','2023-10-05 16:06:33.992925','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/9cce827c-b57f-4e03-8d2a-881aabecdb90karloImage2.png','무지출 느낌으로 합리적인 소비를 하며 좋은 정보를 같이 공유해요','무지출 챌린지',0,'7일',4,1),(2,'2023-10-05 16:43:35.438870','2023-10-05 16:43:35.652526','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/36aec8ea-c28e-428b-bdc9-b8fdde12609ekarloImage2.png','겨울이 왔지만 내년 여름을 대비해야 합니다. 여러분. 운동 방법도 공유하고 닭가슴살도 공유해요. 내년에는 멋진 사람이 되기를...','바디 프로필 챌린지',0,'7일',20,1),(3,'2023-10-05 16:43:45.344182','2023-10-05 16:43:45.449607','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/0a46e838-2bec-43df-a50a-4b03f868845bkarloImage2.png','가끔은 쉬어줘야합니다','하루에 한시간씩은 누워있기',0,'7일',20,3),(4,'2023-10-05 16:44:40.377556','2023-10-05 16:44:40.603815','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/d4e58e22-6fe9-4bd6-9ec4-0aec1040bf2ekarloImage2.png','카페인은 줄여야합니다..','커피 하루에 한잔도 안마시기',0,'7일',4,3),(5,'2023-10-05 16:50:33.747309','2023-10-05 16:50:33.958628','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/0b7bbd22-1973-46ab-8877-c1a2fb761bb1karloImage2.png','요즘 사회 공부를 해야 뭐든 할 수 있고, 될 수 있습니다... 그런 김에 앉아서 하루에 딱 3시간만 열심히 공부해봐요','하루 3시간 공부 인증하기 챌린지',0,'7일',4,1),(6,'2023-10-05 16:51:54.530208','2023-10-05 16:51:54.772616','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/e8bccbfc-12f3-4aa2-b80e-2b5ab3fd51f2karloImage2.png','사회 변화에 민감하게 반응하기 위해서는 정보가 중요합니다..! 다들 좋은 기사 읽고 공유해요','뉴스기사 1개 읽고 공유하기',0,'7일',4,1),(7,'2023-10-05 16:53:49.441787','2023-10-05 16:53:49.660065','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/5379a170-e2be-46ea-8996-dc7eb1130690karloImage2.png','평소 해보고 싶었던 일들을 다 같이 공유하며 어떤 기분이였는지 작성해 봐요','버킷리스트 인증하기',0,'7일',4,1),(8,'2023-10-05 17:03:14.262015','2023-10-05 17:03:14.377354','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/4702ef79-8c3d-45f4-89ca-04435c3d798dkarloImage2.png','웹툰 너무 재밌어요.. 한개만 보기 힘들지만 한개만 보고 끝내는 걸로 챌린지!','1일 1 웹툰 보기',0,'7일',4,3),(9,'2023-10-05 17:04:58.542386','2023-10-05 17:04:58.762037','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/6d0186a8-791f-4079-83fa-6d32fd600b87karloImage2.png','하루에 백준 브론즈부터 하나씩 꼭 풀어봅시다','1일 1알고리즘',0,'7일',4,3),(10,'2023-10-05 17:13:40.527611','2023-10-05 17:13:40.752752','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/c53cac35-2e64-4941-8e17-1a186f220cf1karloImage2.png','금을 모으자','금 모으기 챌린지',0,'7일',4,1),(11,'2023-10-05 17:14:50.895787','2023-10-05 17:14:51.104767','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/1aa8a7ff-d8af-4f01-ac18-5d27933baab3karloImage2.png','자소서를 쓰자','자소서를 쓰자',0,'7일',4,1),(12,'2023-10-05 17:16:26.966431','2023-10-05 17:16:27.174578','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/d992d56a-bf84-4f76-886e-33ab7d88505dkarloImage2.png','연락이 중요해','가족, 주변 친구한테 연략하기',0,'7일',4,1),(13,'2023-10-05 17:17:30.786585','2023-10-05 17:17:31.001706','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/488442e0-359d-45f1-98e6-fdbce9d8736ckarloImage2.png','욕을 하지 맙시다','욕 지양하기',0,'7일',4,1),(14,'2023-10-05 17:18:47.048113','2023-10-05 17:18:47.252180','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/599f581a-d71a-4f2c-967e-3d748a9ba094karloImage2.png','금융권 좋자나요','경제, 시사 공부하기',0,'7일',0,1),(15,'2023-10-05 17:20:21.883709','2023-10-05 17:20:22.071783','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/137ea6c2-722c-431e-a5d7-2f1e29d780aekarloImage2.png','취업해야지','면접 대비 준비',0,'7일',4,1),(16,'2023-10-05 17:20:58.794518','2023-10-05 17:20:59.016757','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/9e2a92ea-6161-42b8-b3ec-a874784d9dc2karloImage2.png','영화보고싶다','영화 관람하기',0,'7일',4,1),(17,'2023-10-05 17:22:18.503410','2023-10-05 17:22:18.739119','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/f3085b93-3cc0-4459-a23a-a8328ab65a5fkarloImage2.png','등산하자','등산합시다',0,'7일',4,1),(18,'2023-10-05 17:25:13.613390','2023-10-05 17:25:13.841285','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/4d89b5dd-9a44-4983-bc1c-73fbd61ef8bckarloImage2.png','달리기는 좋아요','유산소 운동',0,'7일',0,1),(19,'2023-10-05 17:26:28.620245','2023-10-05 17:26:28.821812','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/4b02626c-31da-48b8-949e-eccc4699e5bdkarloImage2.png','읽자 좀','세계 뉴스 읽기',0,'7일',4,1),(20,'2023-10-05 17:33:24.736611','2023-10-05 17:33:24.949593','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/d0eac1a3-c011-49c9-87e4-f1e3e9f933c1karloImage2.png','확인하자','1일 1 취업 사이트 방문',0,'7일',4,1),(21,'2023-10-05 17:33:58.341373','2023-10-05 17:33:58.532348','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/dcc2548a-f51d-4d17-ae17-ea1d80619261karloImage2.png','스몰 토킹의 힘은 아주 중요합니다','점심시간에 누군가와 수다 한번 떨기',0,'7일',4,3),(22,'2023-10-05 17:34:23.872879','2023-10-05 17:34:24.050660','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/a283b059-6a4a-4648-b5d9-257cd66100bdkarloImage2.png','화이팅','이성친구 만들기',0,'7일',4,1),(23,'2023-10-05 17:35:17.987531','2023-10-05 17:35:18.194257','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/1b1f0e67-22da-42a4-9315-81d930be6a99karloImage2.png','잘하자','화 내지 말자',0,'',0,1),(24,'2023-10-05 17:37:30.482843','2023-10-05 17:37:30.664270','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/367292db-0612-44b8-8265-30832fb1a57fkarloImage2.png','그림을 보면 교양력이 상승되겠죠?','핀터레스트에서 그림 보기',0,'7일',4,3),(25,'2023-10-05 17:40:46.343684','2023-10-05 17:40:46.602590','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/1d5cc864-6a40-4e23-bb9d-15204db53f91karloImage2.png','3키로 달리는 것도 쉽지 않습니다.. 매일','하루에 3키로씩 러닝',0,'7일',4,3),(26,'2023-10-05 17:53:17.861174','2023-10-05 17:53:18.090035','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/c912898f-d999-43b6-b1f6-6c80c10c416dkarloImage2.png','마음의 양식을 쌓아야해요!!\n머리를 더 단단히 만들어요','책 한 파트씩 읽고 정리하기',0,'7일',4,3),(27,'2023-10-05 17:55:17.752294','2023-10-05 17:55:18.046829','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/a7c6cf4f-9567-4675-abd0-26ff37451b76karloImage2.png','하루 하루 소비하는 당신 이제는 절약해야 할 때 입니다.','하루 소비 내역 분석하기',0,'7일',4,1),(28,'2023-10-05 18:03:14.808105','2023-10-05 18:03:15.022590','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/71d0cf63-b575-462b-b76e-b739d1c6cc05karloImage2.png','독서하기','미라클모닝',0,'7일',4,2),(29,'2023-10-05 18:29:28.522259','2023-10-05 18:29:28.738449','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/62e7d2b1-0808-4cd3-9fe6-729ef8c466cakarloImage2.png','자율 프로젝트 때는 백엔드를 할겁니다','자바 공부 매일 하기',0,'30일',20,3),(30,'2023-10-05 18:48:54.998586','2023-10-05 18:48:55.286636','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/19a6abe2-d226-45d8-b5da-2edf87eed6c5karloImage2.png','1일 1알고리즘을 매일해야합니다!','코딩 테스트 준비하기',0,'30일',20,3),(31,'2023-10-06 00:23:30.335367','2023-10-06 00:23:30.496191','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/0af370b3-dc99-4cbf-a019-61409db9f072karloImage2.png','독서하기','미라클모닝',0,'7일',4,2),(32,'2023-10-06 00:37:34.432361','2023-10-06 00:37:34.593120','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/e17ce167-9e3d-45c7-9cc3-5cf3edde589ckarloImage2.png','깔깔 웃으면 복이와요','하루에 한번 웃기',0,'7일',4,3),(33,'2023-10-06 01:49:22.372826','2023-10-06 01:49:22.519830','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challenge/8c1d8c20-86a7-4391-b7a9-3ac873973fc2karloImage2.png','독서하기','미라클모닝',0,'7일',4,2);
/*!40000 ALTER TABLE `challenge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `challenge_detail`
--

DROP TABLE IF EXISTS `challenge_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `challenge_detail` (
  `challenge_detail_id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `challenge_detail_content` varchar(255) DEFAULT NULL,
  `challenge_detail_title` varchar(255) DEFAULT NULL,
  `hits` bigint NOT NULL,
  `max_days` bigint NOT NULL,
  `photo_url` varchar(255) DEFAULT NULL,
  `challenge_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`challenge_detail_id`),
  KEY `FK54ncinof1a2leqr63isb6rkiw` (`challenge_id`),
  KEY `FK3veyt34p1ewmjlyrcwxjlaum6` (`user_id`),
  CONSTRAINT `FK3veyt34p1ewmjlyrcwxjlaum6` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FK54ncinof1a2leqr63isb6rkiw` FOREIGN KEY (`challenge_id`) REFERENCES `challenge` (`challenge_id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `challenge_detail`
--

LOCK TABLES `challenge_detail` WRITE;
/*!40000 ALTER TABLE `challenge_detail` DISABLE KEYS */;
INSERT INTO `challenge_detail` VALUES (1,'2023-10-05 17:01:38.818282','2023-10-05 17:01:38.818282','오늘은 술이 마시고 싶지만 짤로써 위로하고 공부 했습니다!','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/9cd83419-f690-4678-b98c-3bf46568d255냥프로필.jpg',5,3),(2,'2023-10-05 17:37:30.334506','2023-10-05 17:37:30.334506','오늘도 고생한 나에게.....','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/5863c8b3-e8de-4021-9371-0453706ac9ca꼬부기.png',8,1),(3,'2023-10-05 17:54:52.062459','2023-10-05 17:54:52.062459','오늘은 술을 한잔 마시는 걸로 남은 돈은 킵','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/64e25532-3210-42ec-8359-3561ab016df7냥프로필.jpg',10,3),(4,'2023-10-05 17:55:40.012446','2023-10-05 17:55:40.012446','오늘은 한잔만 했습니다.. 딱한잔이요..!!','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/a3d7b90f-c221-4553-8b64-d2d002e5e7e8냥프로필.jpg',1,3),(5,'2023-10-05 18:00:20.494159','2023-10-05 18:00:20.494159','오늘은 고양이와 책을 읽어보았습니다 \n고양이가 훨씬 잘보입니다..','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/ae5e75bc-9be3-42f9-a55f-1e014681de74다운로드 (1).jfif',26,3),(6,'2023-10-05 18:01:07.385079','2023-10-05 18:01:07.385079','시사에 눈이 밝아진거같아요','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/6a61e8ec-5647-488f-b2fe-74869661d441IMG_7374.jfif',19,3),(7,'2023-10-05 18:01:26.372464','2023-10-05 18:01:26.372464','우리 팀장 잘한다.','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/f5472b63-759c-4fe7-8395-b9bd2bdf1a6d생성1.png',8,2),(8,'2023-10-05 18:01:39.992117','2023-10-05 18:01:39.992117','아침 점심 저녁 커피 3잔. 저녁으로 초밥. 총 67000원을 썼어.','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/570cba08-51ac-4474-a742-b7dbe9f74ea7스크린샷 2023-10-06 오전 2.59.05.png',27,1),(9,'2023-10-05 18:02:03.703199','2023-10-05 18:02:03.703199','너무 어려워요.. 살려주세요..','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/1f490a1c-cf64-4fcc-af70-aeb90a466208167100535142741_md.png',14,3),(10,'2023-10-05 18:03:18.762126','2023-10-05 18:03:18.762126','달려달려달려!!!','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/1f8408a9-21e1-4b18-9aae-0169103177e4다운로드.jfif',25,3),(11,'2023-10-05 18:03:42.879014','2023-10-05 18:03:42.879014','금이 좋아 너무 좋아','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/825f7961-3e0f-45ae-9cfa-ce656c6c451c스크린샷 2023-10-06 오전 2.58.43.png',10,1),(12,'2023-10-05 18:04:21.622065','2023-10-05 18:04:21.622065','저랑 같이 등산하실래요!?','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/8a20befa-34c7-42f6-9d29-fea217c54504다운로드 (2).jfif',17,3),(13,'2023-10-05 18:04:28.972455','2023-10-05 18:04:28.972455','오늘 하루를 굶었어','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/66874ba1-c7b8-40ab-86ad-82bc81bbddd0스크린샷 2023-10-06 오전 2.59.48.png',1,1),(14,'2023-10-05 18:05:05.305832','2023-10-05 18:05:05.305832','','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/e8e4c4d5-43bf-44ec-9bcf-6ade23654c83스크린샷 2023-10-06 오전 2.59.05.png',26,1),(15,'2023-10-05 18:06:30.758121','2023-10-05 18:06:30.758121','이제 나는야 시사 마스터','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/b21966b1-7903-40e4-8c6c-ac830c7fdeed스크린샷 2023-10-06 오전 2.58.43.png',19,1),(16,'2023-10-05 18:08:23.940468','2023-10-05 18:08:23.940468','나는 금융권 개발자가 될거야','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/72d8c192-4843-407a-a53e-2ebd368c0359스크린샷 2023-10-06 오전 2.58.43.png',14,1),(17,'2023-10-05 18:09:13.522882','2023-10-05 18:09:13.522882','오늘도 힘들었다구','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/8e5042b7-178c-4a23-8167-542b162c663c스크린샷 2023-10-06 오전 2.57.42.png',25,1),(18,'2023-10-05 18:10:07.152229','2023-10-05 18:10:07.152229','등산? 나만 따라 와','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/da2446b8-1a41-4178-88af-fa4e30f62f1f스크린샷 2023-10-06 오전 2.59.05.png',17,1),(19,'2023-10-05 18:10:53.822901','2023-10-05 18:10:53.822901','오늘 나는 치킨을 먹었지...','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/72d4b3e9-4132-40fb-8fd6-ad960501f106스크린샷 2023-10-06 오전 2.59.48.png',7,1),(20,'2023-10-05 18:26:58.503115','2023-10-05 18:26:58.503115','여자친구를 꼭 만들겁니다!','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/9123d269-9cf3-4e01-8ecd-66f446f04ab3냥프로필.jpg',22,3),(21,'2023-10-05 18:29:57.627490','2023-10-05 18:29:57.627490','자바는 이제 제겁니다','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/24a04d91-8871-4928-8806-d3718eaef740IMG_7374.jfif',29,3),(22,'2023-10-05 18:50:00.280506','2023-10-05 18:50:00.280506','오늘은 술은 안마시고 고양이 짤을 보며 공부했습니다','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/6e919fa6-52e8-4827-ba64-6d6149340868냥프로필.jpg',30,3),(23,'2023-10-06 00:19:10.869458','2023-10-06 00:19:10.869458','나는 오늘 코딩계의 매트릭스다','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/044fdf3e-0b29-467c-bd65-d34cd23df147IMG_7374.jfif',30,3),(24,'2023-10-06 00:21:10.067728','2023-10-06 00:21:10.067728','인증완','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/b2a44197-cdc2-4a73-b0fe-fe3e27e6e627대전_3반_신동민.JPG',4,2),(25,'2023-10-06 00:25:44.152879','2023-10-06 00:25:44.152879','화이팅.....','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/ce818916-94ab-45e6-875b-61b5ac2eb3c0image.png',30,5),(26,'2023-10-06 00:25:54.422037','2023-10-06 00:25:54.422037','코테 공부하러 왔어요 ','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/3b46d821-8a93-4a61-8e32-5fa6c374721cfree-icon-card-games-2118315.png',30,4),(27,'2023-10-06 00:27:22.594973','2023-10-06 00:27:22.594973','아침 5시에 일어나서 독서 했어요! 뿌듯 ㅎㅎㅎ','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/61cd1e0a-fa21-4aec-8cd4-06d3d5c6dab8E-Li7k-VcAMRNP6.jpg',31,5),(28,'2023-10-06 00:27:28.950161','2023-10-06 00:27:28.950161','ucc 열심히 만들었어요 !!!!!!! 꿈틀 화이탱','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/53b667f2-224f-4945-8209-696218b046b6로고-removebg-preview.png',31,4),(29,'2023-10-06 00:28:04.165857','2023-10-06 00:28:04.165857','자바는 제 껀데요 ! ','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/4c3939dd-a70b-4cee-98bb-96455b27df4aKakaoTalk_20230926_235731498.jpg',29,4),(30,'2023-10-06 00:28:55.429068','2023-10-06 00:28:55.429068','미라클 모닝 두개나 참여하기','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/025721a7-cdcc-4f63-b99b-86af2be90cedKakaoTalk_20230926_235539498.jpg',28,4),(31,'2023-10-06 00:36:00.268677','2023-10-06 00:36:00.268677','도망.','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/cd40394e-bb16-405e-8b24-2a5e3b5d4453KakaoTalk_20230926_235737498.jpg',23,4),(32,'2023-10-06 00:36:35.291256','2023-10-06 00:36:35.291256','1팀 화이팅','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/0586881a-bece-4f1b-89fa-9566c4ed3e7bKakaoTalk_20230926_235741498.jpg',22,4),(33,'2023-10-06 00:37:41.500796','2023-10-06 00:37:41.500796','인증 완','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/4101658d-310c-4cc1-a6cc-7702593dccc620210201112150.jpg',29,6),(34,'2023-10-06 00:38:28.730901','2023-10-06 00:38:28.730901','놀라운 웃음이였습니다','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/f56709e8-521e-4848-ae12-9f79124948f7167100535142741_md.png',32,3),(35,'2023-10-06 00:39:15.985633','2023-10-06 00:39:15.985633','돈 조와 ','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/42a2e114-ceee-445e-b312-f64c7ecc4c60564ddaae957e5edf1aa0e738b952882af604e7b0e6900f9ac53a43965300eb9a.png',27,4),(36,'2023-10-06 00:41:23.785494','2023-10-06 00:41:23.785494','웃어보아요','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/3ef840c0-f547-41b3-8c02-4c92d145f095야옹.JPG',32,6),(37,'2023-10-06 00:42:17.583192','2023-10-06 00:42:17.583192','독서함','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/3a4867ec-4fb3-4d00-8cd6-7c5b7cd63b48testchallenge.jpg',3,2),(38,'2023-10-06 00:44:39.568439','2023-10-06 00:44:39.568439','3키로 너무한데요 ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ나 쥬겅','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/fbd33f1e-c28a-45b0-893b-750dee5b5cb7화면 캡처 2023-10-06 094358.png',25,4),(39,'2023-10-06 00:46:12.542108','2023-10-06 00:46:12.542108','웃 짜 ','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/41c3bb7f-65ab-4963-9820-4e5284f10bba화면 캡처 2023-10-06 094551.png',32,4),(40,'2023-10-06 00:47:33.811251','2023-10-06 00:47:33.811251','날 뽑아라 회사들아 !','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/87e4db15-8821-4c09-831c-006d6c7fcf1f화면 캡처 2023-10-06 094707.png',20,4),(41,'2023-10-06 00:48:48.332604','2023-10-06 00:48:48.332604','세상아 날 가만 냅또','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/b0024965-5f9a-4a88-98db-d648cb7ed655화면 캡처 2023-10-06 094813.png',13,4),(42,'2023-10-06 01:48:20.107209','2023-10-06 01:48:20.107209','ㅎㅎ','',0,0,'https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/challengeDetail/e623d108-50b2-49b9-92cf-3f7057e436fetestchallenge.jpg',26,2);
/*!40000 ALTER TABLE `challenge_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `challenge_detail_like`
--

DROP TABLE IF EXISTS `challenge_detail_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `challenge_detail_like` (
  `challenge_detail_like_id` bigint NOT NULL AUTO_INCREMENT,
  `is_like` varchar(255) DEFAULT NULL,
  `detail_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`challenge_detail_like_id`),
  KEY `FKgs2uvh3e08j9t6642ewds07qh` (`detail_id`),
  KEY `FKgthh7ctf2636tk8cyd3aa7u9h` (`user_id`),
  CONSTRAINT `FKgs2uvh3e08j9t6642ewds07qh` FOREIGN KEY (`detail_id`) REFERENCES `challenge_detail` (`challenge_detail_id`),
  CONSTRAINT `FKgthh7ctf2636tk8cyd3aa7u9h` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `challenge_detail_like`
--

LOCK TABLES `challenge_detail_like` WRITE;
/*!40000 ALTER TABLE `challenge_detail_like` DISABLE KEYS */;
INSERT INTO `challenge_detail_like` VALUES (1,NULL,28,5),(2,NULL,26,5),(3,NULL,25,4),(4,NULL,34,6);
/*!40000 ALTER TABLE `challenge_detail_like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `challenge_keyword`
--

DROP TABLE IF EXISTS `challenge_keyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `challenge_keyword` (
  `challenge_keyword_id` bigint NOT NULL AUTO_INCREMENT,
  `challenge_id` bigint DEFAULT NULL,
  `dream_keyword` bigint DEFAULT NULL,
  PRIMARY KEY (`challenge_keyword_id`),
  KEY `FK7dtk2s7l2v0eglbxi8nvlisb6` (`challenge_id`),
  KEY `FKj08ddshe7hp37pn44nx6ahcwu` (`dream_keyword`),
  CONSTRAINT `FK7dtk2s7l2v0eglbxi8nvlisb6` FOREIGN KEY (`challenge_id`) REFERENCES `challenge` (`challenge_id`),
  CONSTRAINT `FKj08ddshe7hp37pn44nx6ahcwu` FOREIGN KEY (`dream_keyword`) REFERENCES `dream_keyword` (`keyword_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `challenge_keyword`
--

LOCK TABLES `challenge_keyword` WRITE;
/*!40000 ALTER TABLE `challenge_keyword` DISABLE KEYS */;
INSERT INTO `challenge_keyword` VALUES (1,1,1),(2,2,6),(3,3,10),(4,4,10),(5,5,9),(6,6,8),(7,7,7),(8,8,10),(9,9,9),(10,10,1),(11,11,2),(12,12,3),(13,13,4),(14,14,5),(15,15,9),(16,16,8),(17,17,7),(18,18,6),(19,19,5),(20,20,2),(21,21,3),(22,22,3),(23,23,4),(24,24,8),(25,25,7),(26,26,5),(27,27,1),(28,28,8),(29,29,9),(30,30,9),(31,31,5),(32,32,10),(33,33,5);
/*!40000 ALTER TABLE `challenge_keyword` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `challenge_participation`
--

DROP TABLE IF EXISTS `challenge_participation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `challenge_participation` (
  `challenge_participation_id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `is_in` varchar(255) DEFAULT NULL,
  `time_capsule_content` varchar(255) DEFAULT NULL,
  `challenge_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`challenge_participation_id`),
  KEY `FKdc93filx9a9vcni1uegc51rn` (`challenge_id`),
  KEY `FK4gg53tclygahipcrmd3se0j26` (`user_id`),
  CONSTRAINT `FK4gg53tclygahipcrmd3se0j26` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKdc93filx9a9vcni1uegc51rn` FOREIGN KEY (`challenge_id`) REFERENCES `challenge` (`challenge_id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `challenge_participation`
--

LOCK TABLES `challenge_participation` WRITE;
/*!40000 ALTER TABLE `challenge_participation` DISABLE KEYS */;
INSERT INTO `challenge_participation` VALUES (1,'2023-10-05 16:08:08.820104','P','너가 이걸 성공만 한다면... 내년에는 차를 살 수 있을거야 ㅎㅎ',1,1),(2,'2023-10-05 16:43:51.447696','P','이 챌린지를 완료한다면, 내년에는 여자친구가 생길거야....',2,1),(3,'2023-10-05 16:43:58.681902','P','저는 오늘은 하루종일 누워있어보겠습니다.',3,3),(4,'2023-10-05 16:44:57.799270','P','나 커피 그만마시고 싶은데 이미 너무 멀리 와버렸어',4,3),(5,'2023-10-05 16:50:45.475281','P','이 챌린지라면 넌 내년에 취업할 거야',5,1),(6,'2023-10-05 16:52:06.763632','P','뉴스기사..? 넌 강해져 있을거야',6,1),(7,'2023-10-05 16:54:01.779506','P','너도 이제는 재밌게 살고 있을거야..',7,1),(8,'2023-10-05 16:55:41.175973','P','나는 플젝 꼭... 수상할거야!',7,2),(9,'2023-10-05 17:01:19.955449','P','저도 공부 참 좋아합니다\n우리 같이 열심히 해봐요!!',5,3),(10,'2023-10-05 17:03:26.933389','P','여러분 과한 웹툰은 몸에 좋지 않습니다',8,3),(11,'2023-10-05 17:05:31.872924','P','1일 1알고리즘이 그렇게 어렵다고합니다.. 저도그랬고..\n하지만 7일짜리부터 차근차근 채워가면 365일까지 채울수 있을 것 같아요',9,3),(12,'2023-10-05 17:13:45.847057','P','금을 모으자',10,1),(13,'2023-10-05 17:14:56.119151','P','취업하자',11,1),(14,'2023-10-05 17:16:31.809875','P','연락합시다',12,1),(15,'2023-10-05 17:17:35.843035','P','척허게 살자',13,1),(16,'2023-10-05 17:18:50.117728','P','취업하자',14,1),(17,'2023-10-05 17:20:25.699325','P','취업해야지',15,1),(18,'2023-10-05 17:21:02.488630','P','영화좀 보자',16,1),(19,'2023-10-05 17:22:22.578641','P','건강',17,1),(20,'2023-10-05 17:24:14.450832','P','열심히 해볼게요',9,1),(21,'2023-10-05 17:25:17.218689','P','달리기 좋지',18,1),(22,'2023-10-05 17:26:42.894852','P','잘했어',19,1),(23,'2023-10-05 17:33:28.081860','P','확인!',20,1),(24,'2023-10-05 17:34:09.118220','P','저랑도 만나면 수다 떠실분~?',21,3),(25,'2023-10-05 17:34:27.074257','P','해보자',22,1),(26,'2023-10-05 17:35:25.736688','P','잘하자',23,1),(27,'2023-10-05 17:37:02.414707','P','미래의 너라면 할 수 있어!',8,1),(28,'2023-10-05 17:38:02.585423','P','핀터레스트는 집에서 보는 미술관이라고 생각합니다',24,3),(29,'2023-10-05 17:41:32.693428','P','러닝 크루 모집하고싶습니다!! 연락주세요 0100001111',25,3),(30,'2023-10-05 17:53:34.525675','P','좋은책 같이 추천하면서 더 많이 읽어요 같이!!',26,3),(31,'2023-10-05 17:54:33.292485','P','금은 어떻게 모을지 모르겠네요... 저는 우선 돈부터 모읍니다..ㅠㅠ 다들 정보 공유해주세오',10,3),(32,'2023-10-05 17:55:21.380344','P','저 돈 진짜 많이쓰는데 이기회에 아껴보겠습니다!',1,3),(33,'2023-10-05 17:55:25.654724','P','7일 뒤 너는 차를 살 수 있을거야',27,1),(34,'2023-10-05 17:59:26.797058','P','대전 3반 모두 취업 성공하길!!',8,2),(35,'2023-10-05 18:00:52.665893','P','뉴스는 진짜 읽기 어려운데 같이읽으면 잘할 수 있을거 같아요!!',19,3),(36,'2023-10-05 18:01:51.471494','P','시사 경제는 진짜 문외한인데.. 잘부탁드립니다..',14,3),(37,'2023-10-05 18:03:41.781668','P','등산 진자 주말마다 가면 환상 그잡채',17,3),(38,'2023-10-05 18:03:52.951961','P','우리 모두 9to6',28,2),(39,'2023-10-05 18:04:55.920963','P','너는 멋있는 놈이 되어 있을거야',26,1),(40,'2023-10-05 18:09:00.545475','P','너는 7일 뒤 여자친구가 생길거야',25,1),(41,'2023-10-05 18:09:04.811961','P','다들 어떤 버킷리스트가 있을지 궁금하네요!',7,3),(42,'2023-10-05 18:26:41.141011','P','이성 친구가 꼭 만들고 싶어요',22,3),(43,'2023-10-05 18:29:35.199035','P','자바 공부 화이팅!',29,3),(44,'2023-10-05 18:49:04.030940','P','앞으로 취업까지 화이팅!',30,3),(45,'2023-10-06 00:15:01.153581','P','코테 뚫어봅시다~!!!',30,5),(46,'2023-10-06 00:16:11.636806','P','화이팅해라 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',30,4),(47,'2023-10-06 00:16:36.142208','P','할 수 이쒀',29,4),(48,'2023-10-06 00:20:36.575760','P','대전3반 모두 취업 성공하길!',4,2),(49,'2023-10-06 00:23:39.856419','P','나 잠들거야..!',31,2),(50,'2023-10-06 00:26:21.791706','P','안까먹고 잘 하고 있죠?????!?!',31,5),(51,'2023-10-06 00:27:05.866289','P','일찍 일어나고 있냐',31,4),(52,'2023-10-06 00:27:47.369336','P','화이팅!!!!!!!!!!!!!!!!!!!!!!!!!!!',28,5),(53,'2023-10-06 00:28:05.593444','P','자바 이제부터 시작해봅니다,,,,자바를 자바,,,,',29,5),(54,'2023-10-06 00:28:25.181996','P','가계부 잘 쓰고있죠???!??',27,5),(55,'2023-10-06 00:28:36.057522','P','미라클 모닝 !!!!!!!!!!!!!!! ',28,4),(56,'2023-10-06 00:28:50.841981','P','책좀 읽읍시다,,,,,화이팅',26,5),(57,'2023-10-06 00:29:05.557001','P','화이팅',27,4),(58,'2023-10-06 00:29:15.616464','P','화ㅣㅇ탱',26,4),(59,'2023-10-06 00:29:28.654916','P','화이팅',24,4),(60,'2023-10-06 00:29:39.557545','P','호아ㅣ팅',25,4),(61,'2023-10-06 00:34:06.939013','P','화내지마',23,4),(62,'2023-10-06 00:36:13.648017','P','ㅋ성공함?',22,4),(63,'2023-10-06 00:36:14.802173','P','화이팅!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',31,6),(64,'2023-10-06 00:36:29.979799','P','자바도 뿌셔봅시다',29,6),(65,'2023-10-06 00:37:16.478605','P','김선진 짱',3,2),(66,'2023-10-06 00:37:43.199785','P','웃음은 참 중요하답니다',32,3),(67,'2023-10-06 00:37:53.525298','P','우하ㅏ하ㅏ하하하하하하하ㅏ',32,6),(68,'2023-10-06 00:46:00.881281','P','웃어웃어',32,4),(69,'2023-10-06 00:47:19.242579','P','취준뽀셔',20,4),(70,'2023-10-06 00:47:52.989005','P','욕하지마',13,4),(71,'2023-10-06 01:48:05.420007','P','우리 프로젝트 모두 수고했어요!',26,2),(72,'2023-10-06 01:49:25.298828','P','ㅎㅎ',33,2);
/*!40000 ALTER TABLE `challenge_participation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `challenge_period`
--

DROP TABLE IF EXISTS `challenge_period`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `challenge_period` (
  `challenge_period_id` bigint NOT NULL AUTO_INCREMENT,
  `period` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`challenge_period_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `challenge_period`
--

LOCK TABLES `challenge_period` WRITE;
/*!40000 ALTER TABLE `challenge_period` DISABLE KEYS */;
/*!40000 ALTER TABLE `challenge_period` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `challenge_user_detail_status`
--

DROP TABLE IF EXISTS `challenge_user_detail_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `challenge_user_detail_status` (
  `challenge_user_detail_status_id` bigint NOT NULL AUTO_INCREMENT,
  `is_read` varchar(255) DEFAULT NULL,
  `challenge_user_detail_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`challenge_user_detail_status_id`),
  KEY `FKd609v9595nmqrnykkyoyuo7cj` (`challenge_user_detail_id`),
  KEY `FK3ps94fj3tsvqe1sae6bngmkry` (`user_id`),
  CONSTRAINT `FK3ps94fj3tsvqe1sae6bngmkry` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKd609v9595nmqrnykkyoyuo7cj` FOREIGN KEY (`challenge_user_detail_id`) REFERENCES `challenge_detail` (`challenge_detail_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `challenge_user_detail_status`
--

LOCK TABLES `challenge_user_detail_status` WRITE;
/*!40000 ALTER TABLE `challenge_user_detail_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `challenge_user_detail_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `comment_id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `detail_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `FKiakhkdg9v5d9qj9r51rfy7adf` (`detail_id`),
  KEY `FK8kcum44fvpupyw6f5baccx25c` (`user_id`),
  CONSTRAINT `FK8kcum44fvpupyw6f5baccx25c` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKiakhkdg9v5d9qj9r51rfy7adf` FOREIGN KEY (`detail_id`) REFERENCES `challenge_detail` (`challenge_detail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'2023-10-06 00:33:30.951662','2023-10-06 00:33:30.951662','할 수 있어 민지 !!! ',25,4),(2,'2023-10-06 00:33:50.296980','2023-10-06 00:33:50.296980',';;;;;;;;;;;;; 고양이 멋져 ..',23,4);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dream_card`
--

DROP TABLE IF EXISTS `dream_card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dream_card` (
  `dream_card_id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `auction_status` varchar(255) DEFAULT NULL,
  `dream_card_content` varchar(255) DEFAULT NULL,
  `dream_card_image_url` varchar(255) DEFAULT NULL,
  `dream_telling` text,
  `grade` varchar(255) DEFAULT NULL,
  `hits` bigint NOT NULL,
  `is_show` varchar(255) DEFAULT NULL,
  `positive_grade` varchar(255) DEFAULT NULL,
  `positive_point` int NOT NULL,
  `rare_grade` varchar(255) DEFAULT NULL,
  `rare_point` int NOT NULL,
  `dream_card_author` bigint DEFAULT NULL,
  `dream_card_owner` bigint DEFAULT NULL,
  PRIMARY KEY (`dream_card_id`),
  KEY `FK24umi6mh84aadveosrbh5otjp` (`dream_card_author`),
  KEY `FKbmswjcl88y0rdd6wlqb4f2ckh` (`dream_card_owner`),
  CONSTRAINT `FK24umi6mh84aadveosrbh5otjp` FOREIGN KEY (`dream_card_author`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKbmswjcl88y0rdd6wlqb4f2ckh` FOREIGN KEY (`dream_card_owner`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dream_card`
--

LOCK TABLES `dream_card` WRITE;
/*!40000 ALTER TABLE `dream_card` DISABLE KEYS */;
INSERT INTO `dream_card` VALUES (1,'2023-10-05 15:37:35.144884','F','프로젝트 마지막 날이야 다들 수고했어 기분이 좋다','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/9d36c4bb-3173-447f-9242-1f993e2fead0karloImage.png','고양이를 키우고 있고 원래 고양이를 좋아하는 분이 이런 꿈을 꿨다면 뭔가 기분 좋은 일이 생긴다는 의미로 해석을 해볼 수 있습니다.','SS',1,'T','S',98,'B',94,1,1),(2,'2023-10-05 15:37:49.243376','F','꿈에서는 과제가 끝났는데 사실상 하루가 남았던 거였어요','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/44180b3b-c390-4021-8fae-95ecb8ad73adkarloImage.png','사랑니와 같은 불필요한 치아를 뽑아내는 것 그리고 썩은 이를 뽑아내는 꿈은 자신이 가지고 있는 문제를 해결하게 된다는 의미로 볼 수 있습니다.','SS',2,'T','B',35,'SS',249,3,3),(3,'2023-10-05 15:38:41.032606','F','사랑니를 뽑았는데 너무 아팠어요.','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/add7a28c-e1eb-4e9d-8f5d-446a005c28bfkarloImage.png','이가 빠지는 꿈 뿐만 아니라 이에 문제가 생기는 이런 꿈도 주의가 필요한 꿈입니다. 꿈 이야기를 가족 등에게 해드리고 주의를 당부해 놓는 것이 좋습니다.','F',0,'T','C',7,'F',39,3,3),(4,'2023-10-05 15:38:54.856452','F','사고싶었던 물건들을 구매 했어 그리고 강아지와 같이 산책했어','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/bb15cf61-53af-4f00-87c5-1f8a889bcb64karloImage.png','꿈에서 무슨 일로 제 물건들을 잃어버렸습니다근데 그중 핸드폰을 찾게 되고 나머진 잃어버려도 신경 안쓰고 핸드폰 찾았다고 좋아했습니다핸드폰 안의 사진과 관련이 있었던거 같은데 확실히 기억은 안납니다뭔가 잃어버리고 나서. 그 다음에 찾았다.라는 것은 길몽에 속합니다... 사진에 관련된 것은 정보 유출이나 혹은 자신의 물건을 실제로잃어버릴 수 있는 의미이니 이 점은 주의하시는게 좋겠습니다.','F',0,'T','B',80,'F',27,1,1),(5,'2023-10-05 15:41:41.611212','F','예쁜 고양이','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/18555d61-080b-4cf9-a4bc-44e2c308f4c1karloImage.png','길몽입니다.태몽일 수도 있고 아니면 예지몽일 수도 있습니다.그 외의 뜻으로는 뭔가 일이 성취되거나 혹은잘 풀리는 일, 사업상의 성공 등도 의미가 됩니다.','B',0,'T','B',95,'F',43,2,2),(6,'2023-10-05 15:41:45.466093','F','바다에서 수영했어 끝나고 새우도 먹고 술도 마셨어','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/ed945893-11d4-4fb9-b9a1-7bb091634498karloImage.png','시체와 관련된 꿈은 대부분 좋게 해석이 된답니다. 시체 썩은 물을 먹었다면 이는 뭔가 횡재수와 관련된 꿈일 수 있을 것 같네요.','B',0,'T','B',86,'F',45,1,1),(7,'2023-10-05 15:41:59.234664','F','악어','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/5274de98-a2e9-4d23-9448-7a2674ff3ad1karloImage.png','악어와 같이 힘에 세고 덩치가 큰 동물을 보는 꿈은 좋은 꿈에 속합니다. 뭔가 자신에게 힘이 생긴다는 의미일 수 있습니다. 지위가 높아진다거나 권위를 세우게 된다는 의미일 수도 있고요.','F',2,'T','B',45,'F',5,1,1),(8,'2023-10-05 15:42:04.502814','F','핸드폰을 하는 고양이','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/490d9c5c-8361-4b16-9e25-3aaa63b0580akarloImage.png','고양이가 나오는 꿈은 뭔가 걱정거리가 생긴다는 의미일 수 있으니 주의를 기울이는 것이 좋습니다.','F',1,'T','B',49,'F',30,3,3),(9,'2023-10-05 15:42:21.647121','F','날개가 있는 고래','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/0a7d1689-6809-459c-afa5-def137b83207karloImage.png','자신이 하늘을 나는 꿈이라면 뭔가 자신이 바라던 바가 이루어지게 된다는 좋은 의미라고 할 수 있습니다.','F',1,'T','S',51,'F',6,2,2),(10,'2023-10-05 15:42:30.597370','F','비행기를 타고 여행을 갔어','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/a904819f-f802-4cd2-8aa6-444b5e250f34karloImage.png','다른 사람과 함께 차를 타고 여행을 가는 꿈은 뭔가 다른 사람과 함께 진행하게 되는 일이 생긴다는 의미일 수 있습니다.','SS',1,'T','B',51,'SS',179,1,1),(11,'2023-10-05 15:42:54.183690','F','꽃과 아름다운 소녀','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/85ef759a-3ce4-43b2-9263-a6c9eecfc3c8karloImage.png','어떤 의미가 있는 꿈은 아닌 것 같습니다. 이제 막 졸업식 시즌이 지났으니, 그것과 관련한 자신의 이런저런 생각이 이런 꿈으로 표현된 것일 수 있습니다.','F',1,'F','C',85,'F',11,2,2),(12,'2023-10-05 15:43:16.822932','F','친구와 커피를 한잔함','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/77b49ed9-0548-4009-bc43-d33cc3dbedaekarloImage.png','담배를 원래 피시는 분이라면 그냥 그 일상이 나온 것일 테고요. 담배를 피지 않는 분이 이런 꿈을 꿨다면 일탈에 대한 욕구가 있음을 의미하는 꿈일 수 있습니다.','SS',3,'T','B',53,'B',95,3,2),(13,'2023-10-05 15:43:22.888179','F','행복한 강아지와 집','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/288c3bdb-d204-44e9-b008-078ef1d39eb2karloImage.png','꽤 괜찮은 꿈이군요.나무는 기본적으로 뭔가 성과를 가져오는 의미입니다.그것도 과실수라고 하면 앞으로 뭔가 기대가 될 수 있는 좋은 꿈입니다.','SS',0,'F','S',82,'SS',167,2,2),(14,'2023-10-05 15:44:15.616442','F','화덕 피자와 와인','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/03a0aabe-999b-43fe-8977-60c4b8ecab04karloImage.png','일단은 뭔가 의미가 있다기 보다는 미래의 자신에 대한 상상이 꿈에서 변형된 형태로 나온 것일 수 있겠습니다. 굳이 해석을 하자면 아이가 생기고 가족이 생겼다는 것은 자신이 뭔가 창조적인 일에서 성과가 있을 것임을 의미한다고 할 수 있겠고요.','F',6,'T','B',65,'F',0,2,2),(15,'2023-10-05 15:44:30.398022','F','위스키와 피자','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/b699b1e9-4e3f-44ed-b388-8e2cb21fa76ckarloImage.png','신부님이든 스님이든 우리들이 이런 분들을 찾는 것은 인생에 있어서 어떤 해답을 구하고자 함이라고 볼 수 있습니다. 님의 꿈의 경우에는 신부님을 찾았고 이 분으로부터 무엇인가를 받았다는 것은 현재 골치거리가 있다면 그것이 해결될 것임을 상징하는 꿈이라고 할 수 있습니다','F',5,'T','B',53,'F',0,2,2),(16,'2023-10-05 15:46:08.530651','F','꿈에 용이 나와서 나를 쫓아 왔어','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/47e5de4e-42b7-4003-a2a8-a13ba28fcde3karloImage.png','뱀이나 거북이는 모두 좋은 상징입니다. 뱀이 거북이를 잡아 먹었다고 해서 뭔가 색다른 해몽이 필요할 것 같지는 않고요. 재물이나 건강에서 좋은 일이 생김을 의미하는 꿈으로 볼 수 있을 것 같네요.','SS',3,'T','B',48,'SS',349,1,1),(17,'2023-10-05 16:18:04.633543','F','퇴폐적인 여인과 남자','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/cc654aa5-0750-4c68-8481-b3e7471800e6karloImage.png','청소년이거나 청년기의 여성이 이런 꿈을 꿨다면 그저 이성에 대한 호기심이나 관심이 그 원인이라고 보시면 되고요. 나이가 더 든 분이라면 대인 관계가 좋아진다는 의미로 볼 수 있습니다. 남성이 이런 꿈을 꿨다며 다른 사람과 협력해서 일을 하는 것이 좋다는 의미일 수 있고요.','SS',3,'T','B',45,'B',99,2,2),(18,'2023-10-05 16:39:54.759241','F','고래와 같이 헤엄을 치고 있었어요','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/7f8c1752-18b1-4bb3-a47c-153e417c4b4ckarloImage.png','꿈에 용이 등장하였으니 이를 태몽으로 해석을 할 수도 있습니다. 하지만 그 용이 하늘로 오르는 것이 아니고 그저 물 속에 있었다면 이는 무언가가 아직 준비가 덜 된 상태라고 할 수 있을 것 같네요.','F',3,'T','B',53,'F',17,3,3),(19,'2023-10-05 16:40:20.859303','T','용이 제 눈 앞을 지나갔어요','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/85fb6d25-469e-4a88-a9aa-400bd8a28ccdkarloImage.png','위험에 대한 꿈입니다.크게 의미가 있는 꿈은 아니지만,이런 종류의 꿈은 자신에게 위협되는 것을 경계한다. 예지한다. 입니다.당분간은 조심하는 것이 좋습니다.','SS',2,'T','B',53,'B',96,3,3),(20,'2023-10-05 16:42:23.597185','F','저는 꿈을 사고 파는 상인이였어요. 부자였었어요.','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/cb14052c-6ea7-4a36-bd26-009b2583511akarloImage.png','동생과 함께 있는 자리에서 사고가 나는 꿈이라면 누군가와 같이 하는 일에서 주의를 기울어야 한다는 의미일 수 있습니다.','SS',1,'T','B',53,'SS',394,3,3),(21,'2023-10-05 17:04:36.191108','F','검은 낙타가 좇아와서, 사람이 뛰어갔어.','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/0560dfb7-5667-4672-94f2-87255bcbb072karloImage.png','별다른 의미가 없는 꿈입니다. 아마도 그 사람과 함께 하기 싫어하는 님의 마음이 반영되어 이런 꿈을 꾼 것이겠지요.','SS',1,'F','C',50,'A',122,2,2),(22,'2023-10-05 17:34:15.469298','T',' 평소 좋아하던 사람이랑 데이트하는 꿈을 꿨어','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/910e0739-a704-48fe-93ce-3f5d42c9b82fkarloImage.png','별다른 의미가 있는 꿈이라기 보다는 청소년기나 청년기처럼 이성이나 연애에 대한 관심이 크고 성적으로 성숙해지는 시기에 흔하게 꿀 수 있는 꿈일 뿐입니다.','SS',4,'T','B',72,'SS',350,2,2),(23,'2023-10-05 17:42:05.556299','F','바다속에서 진주를 발견했어....!','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/2dbf4908-9b25-4cf9-b7fa-5c304206988akarloImage.png','바다에서 진주를 얻는 꿈이라면 뭔가 자신이 진행하고 있는 일에서 큰 성과가 생긴다는 의미로 볼 수 있겠습니다.','B',6,'T','A',64,'F',42,1,2),(24,'2023-10-05 17:42:43.301460','T',' 강아지와 호랑이가 방에 들어왔어','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/683aacfc-ff02-459e-aacd-44258aff9885karloImage.png','호랑이가 방으로 들어오는 꿈이라면 아주 좋은 꿈이라고 생각됩니다. 자신이 하는 일이 잘 풀린다거나 노력한 일의 성과가 있다거나 재물이 들어오는 꿈 등으로 볼 수 있고요.','SS',12,'T','S',50,'B',78,3,3),(25,'2023-10-05 18:39:27.582331','F',' 예쁜 고양이를 만나는 꿈을 꾸었습니다','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/b43a9e6b-52cd-400b-9a14-c20f8e8bc91ekarloImage.png','다이아 반지를 끼고 있는 꿈이라면 재물이 들어온다거나 이성과 관련하여 좋은 일이 생김을 의미하는 꿈일 수 있습니다.','SS',0,'T','B',70,'SS',415,3,3),(26,'2023-10-06 00:10:23.816564','F',' 평소 좋아하는 사람이랑 데이트하는 꿈을 꿨어','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/f3be75e6-2856-4b79-aebd-9cd9d30682bckarloImage.png','별다른 의미가 있는 꿈이라기 보다는 청소년기나 청년기처럼 이성이나 연애에 대한 관심이 크고 성적으로 성숙해지는 시기에 흔하게 꿀 수 있는 꿈일 뿐입니다.','SS',0,'F','B',74,'SS',350,2,2),(27,'2023-10-06 00:17:27.927491','T',' 평소 좋아하는 사람이랑 데이트하는 꿈을 꿨어','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/a5ca5729-0e47-45a8-a4f8-530414accd01karloImage.png','별다른 의미가 있는 꿈이라기 보다는 청소년기나 청년기처럼 이성이나 연애에 대한 관심이 크고 성적으로 성숙해지는 시기에 흔하게 꿀 수 있는 꿈일 뿐입니다.','SS',1,'T','B',74,'SS',350,2,2),(29,'2023-10-06 00:30:13.032830','F','오늘은 프로젝트를 끝내는 꿈을 꿨어요~~!! 너무 행복해요!!!!!','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/e1090399-4394-4d31-873e-d1978c1c29e2karloImage.png','물건을 두고 내리는 첫번째 꿈의 경우엔 뭔가 실제로 자신의 물건을 잃어버릴 수 있으니 주의하라는 의미로 받아들이시면 될 것 같고요. 두번째 꿈의 경우엔 성교의 느낌이 좋았다면 이는 다른 사람과의 대인 관계가 좋아질 것이라는 의미로 받아들이시면 되겠습니다.','SS',0,'F','B',96,'SS',285,5,5),(30,'2023-10-06 00:30:14.522941','F','장미가 가득하고 분수대가 있는 정원에서 산책하는 꿈','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/9023238f-540c-49b5-9615-be683f925080karloImage.png','연예인을 지망하고 있는 분이라면 그러한 마음이 강하여 이러한 꿈을 꾸었을 수 있습니다. 그런 생각이 전혀 없는 분이라면 이처럼 노래를 부르는 꿈은 좋은 일이 일어날 것임을 의미한다고 할 수 있습니다.','SS',1,'T','B',78,'SS',281,4,4),(31,'2023-10-06 00:30:40.827290','F','강아지랑 토끼가 손잡고 춤추는 꿈','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/b3fee242-d176-40d4-8b47-f706237715d9karloImage.png','동물의 배설물이 자신의 신체에 묻는 꿈은 행운이 따르는 일이 생기는 꿈으로 볼 수 있습니다.','SS',2,'F','B',56,'SS',395,4,4),(32,'2023-10-06 00:30:42.526665','F','날씨가 좋아서 친구들과 공원에서 피크닉하는 꿈을 꿨어요! 너무 신나요!','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/d34cbbde-fc0b-42eb-b5a9-498eebd417d6karloImage.png','물건을 두고 내리는 첫번째 꿈의 경우엔 뭔가 실제로 자신의 물건을 잃어버릴 수 있으니 주의하라는 의미로 받아들이시면 될 것 같고요. 두번째 꿈의 경우엔 성교의 느낌이 좋았다면 이는 다른 사람과의 대인 관계가 좋아질 것이라는 의미로 받아들이시면 되겠습니다.','SS',0,'F','B',95,'SS',259,5,5),(33,'2023-10-06 00:31:02.034426','F','나비가 꽃에 날아드는 꿈','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/eaca8560-eac5-4735-80c3-7d884fbe13cekarloImage.png','임신을 하는 꿈은 뭔가 자신이 그간 기울인 노력에 성과가 생긴다는 의미일 수 있습니다.','SS',0,'T','A',52,'SS',492,4,4),(34,'2023-10-06 00:32:01.403106','F','밤하늘에 별똥별이 우수수 떨어지는 꿈','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/ecee0f22-595a-4c74-bbdd-285481f0653ckarloImage.png','밤 하늘에 떠 있는 수많은 별을 보았다면 아주 좋은 꿈입니다. 자신이 소망하는 바가 이뤄지게 된다는 의미일 수 있습니다.','SS',5,'T','A',62,'SS',397,4,4),(35,'2023-10-06 01:45:48.880006','T',' 평소 좋아하는 사람이랑 데이트하는 꿈을 꿨어','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/dd8a470b-2186-4d1f-a5c5-464105a6f188karloImage.png','별다른 의미가 있는 꿈이라기 보다는 청소년기나 청년기처럼 이성이나 연애에 대한 관심이 크고 성적으로 성숙해지는 시기에 흔하게 꿀 수 있는 꿈일 뿐입니다.','SS',1,'T','B',74,'SS',350,2,2),(36,'2023-10-06 02:10:16.305024','F',' 나는 오늘 호랑이가 나를 무는 꿈을 꿨어','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/a55dfeac-4d67-485c-a41a-c56e26e7f3eakarloImage.png','젖이 나오는 꿈이라면 이는 뭔가 다른 사람에게 자신이 영향을 미친다거나 투자를 하게 된다는 의미로 볼 수 있습니다.','SS',0,'F','B',49,'SS',336,2,2),(37,'2023-10-06 02:11:23.351742','F',' 공룡이 나타나서 지하철을  밟아 버리는 꿈.','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/cfbf5c17-f8a1-427d-9810-2f877c8c494fkarloImage.png','돌아가신 아버지가 나타나는 경우 그 행동이 중요하겠지요. 님과 하이파이브를 했다면 이는 뭔가 님에게 좋은 일이 생긴다거나 뭔가를 힘차게 시작할 수 있음을 의미하는 꿈이 아닌가 싶습니다.','SS',0,'F','B',47,'SS',334,2,2),(38,'2023-10-06 02:12:31.754392','F',' 나 현우 형님 오늘 발표하는 꿈 꿨어 그리고 나를 꿈에서 깨우더라 일어나라고','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/dreamCard/408aeeb3-0823-4a4c-985a-1e0987c7ac43karloImage.png','머리카락을 자르는 꿈이라면 손실이 생긴다거나 어떤 일에서 손해를 본다는 의미일 수 있으니 주의를 기울이는 것이 좋습니다.','SS',0,'F','C',55,'SS',224,2,2);
/*!40000 ALTER TABLE `dream_card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dream_card_like`
--

DROP TABLE IF EXISTS `dream_card_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dream_card_like` (
  `dream_card_like_id` bigint NOT NULL AUTO_INCREMENT,
  `dream_card_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`dream_card_like_id`),
  KEY `FKm12tonw0sej24ccrqvfhcn90g` (`dream_card_id`),
  KEY `FKij7igcnhgp3fqw0vnwyiotxgh` (`user_id`),
  CONSTRAINT `FKij7igcnhgp3fqw0vnwyiotxgh` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKm12tonw0sej24ccrqvfhcn90g` FOREIGN KEY (`dream_card_id`) REFERENCES `dream_card` (`dream_card_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dream_card_like`
--

LOCK TABLES `dream_card_like` WRITE;
/*!40000 ALTER TABLE `dream_card_like` DISABLE KEYS */;
INSERT INTO `dream_card_like` VALUES (6,12,1),(9,2,1),(10,3,1),(12,23,1),(14,24,1),(16,29,1),(17,31,1);
/*!40000 ALTER TABLE `dream_card_like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dream_keyword`
--

DROP TABLE IF EXISTS `dream_keyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dream_keyword` (
  `keyword_id` bigint NOT NULL AUTO_INCREMENT,
  `keyword` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`keyword_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dream_keyword`
--

LOCK TABLES `dream_keyword` WRITE;
/*!40000 ALTER TABLE `dream_keyword` DISABLE KEYS */;
INSERT INTO `dream_keyword` VALUES (1,'재물'),(2,'진로'),(3,'인간관계'),(4,'감정'),(5,'자기계발'),(6,'건강'),(7,'도전'),(8,'교양'),(9,'학습'),(10,'기타');
/*!40000 ALTER TABLE `dream_keyword` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follow`
--

DROP TABLE IF EXISTS `follow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `follow` (
  `follow_id` bigint NOT NULL AUTO_INCREMENT,
  `from_id` bigint DEFAULT NULL,
  `to_id` bigint DEFAULT NULL,
  PRIMARY KEY (`follow_id`),
  KEY `FKeioxbjdu8e05c7girl7129q1t` (`from_id`),
  KEY `FKq103isl3e5kx6ik9dgmuj71m9` (`to_id`),
  CONSTRAINT `FKeioxbjdu8e05c7girl7129q1t` FOREIGN KEY (`from_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKq103isl3e5kx6ik9dgmuj71m9` FOREIGN KEY (`to_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follow`
--

LOCK TABLES `follow` WRITE;
/*!40000 ALTER TABLE `follow` DISABLE KEYS */;
INSERT INTO `follow` VALUES (1,3,1),(2,1,2),(4,2,1),(5,2,3),(6,1,3),(7,3,2),(8,5,4),(10,4,5),(11,5,3),(12,5,2),(13,5,1),(14,3,4),(15,3,5),(16,4,3),(17,2,4),(18,2,5);
/*!40000 ALTER TABLE `follow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (1);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message` (
  `message_id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `is_read` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `from_id` bigint DEFAULT NULL,
  `to_id` bigint DEFAULT NULL,
  PRIMARY KEY (`message_id`),
  KEY `FKkn6rt8591aaepiuacwuggj556` (`from_id`),
  KEY `FK7w4n34mf259wjvyqqc0pb534n` (`to_id`),
  CONSTRAINT `FK7w4n34mf259wjvyqqc0pb534n` FOREIGN KEY (`to_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKkn6rt8591aaepiuacwuggj556` FOREIGN KEY (`from_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification` (
  `notification_id` bigint NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `is_read` varchar(255) DEFAULT NULL,
  `reference_id` bigint DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`notification_id`),
  KEY `FKb0yvoep4h4k92ipon31wmdf7e` (`user_id`),
  CONSTRAINT `FKb0yvoep4h4k92ipon31wmdf7e` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `point` int NOT NULL,
  `profile_image_name` varchar(255) DEFAULT NULL,
  `profile_url` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `wriggle_point` double DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'2023-10-05 15:34:58.771254','qjatjs98@naver.com','최범선','강해지고말겠어',1050900,'default.jpg','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/userProfile/0308e736-a60c-4510-a5c1-25c85c25e0d6꼬부기.png','USER',36.5),(2,'2023-10-05 15:35:15.411473','prodigy_min@kakao.com','신동민','플젝끝이다',751300,'default.jpg','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/userProfile/ca51b2f3-9746-4045-9848-026a7a8d0b0biufan.jpg','USER',63),(3,'2023-10-05 15:35:18.071824','les0908@kakao.com','은돌','은돌',1066500,'default.jpg','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/userProfile/82f8f3de-20fc-487a-91eb-11c2a8dcc5b3냥프로필.jpg','USER',46.5),(4,'2023-10-06 00:01:28.074150','y6357@naver.com','윤영','윤땡',6500,'default.jpg','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/userProfile/5d377c9d-e399-43d1-8951-b828a074a1cfKakaoTalk_20230926_235731498.jpg','USER',13),(5,'2023-10-06 00:13:58.339231','jwww98730@naver.com','변민지','민지',5500,'default.jpg','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/userProfile/68420759-0451-4dd4-b4ae-dd5ae86c109b시나모롤.png','USER',46.5),(6,'2023-10-06 00:33:10.052989','myyouth0907@daum.net','변민지','꿈돌이',5200,'default.jpg','https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/userProfile/5e8026dd-f757-4f52-936d-04d0cffb385f꿈돌이.PNG','USER',56.5),(7,'2023-10-06 01:41:48.856525','acd0825@gmail.com','지원','제이제이리',5000,'default.jpg','http://k.kakaocdn.net/dn/xYXXE/btssfVxv3ME/snmF9RVSCHdnJND2JJ4ujk/img_110x110.jpg','USER',36.5),(8,'2023-10-06 01:42:42.151300','harib0@kakao.com','현준',NULL,5000,'default.jpg','http://k.kakaocdn.net/dn/lRVjj/btsjXwUfGQd/YNRkLpIcP5MpAQ31qSzVK1/img_110x110.jpg','GUEST',36.5),(9,'2023-10-06 01:43:19.936192',NULL,'박지영',NULL,5000,'default.jpg','http://k.kakaocdn.net/dn/lDvum/btsfOIioUGJ/Ds9nRga3CEpYLAirGkmDb0/img_110x110.jpg','GUEST',36.5);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wriggle_review`
--

DROP TABLE IF EXISTS `wriggle_review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wriggle_review` (
  `wriggle_review_id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `review_content` varchar(255) DEFAULT NULL,
  `review_point` int NOT NULL,
  `review_status` varchar(255) DEFAULT NULL,
  `buyer_id` bigint DEFAULT NULL,
  `dream_card_id` bigint DEFAULT NULL,
  `seller_id` bigint DEFAULT NULL,
  PRIMARY KEY (`wriggle_review_id`),
  KEY `FK2njvpi9drd5upy41ljlwrs4d3` (`buyer_id`),
  KEY `FKaow4fduohuhyek1e4fpbx6wp2` (`dream_card_id`),
  KEY `FKtbliu6paets9jeorfj7lf5yek` (`seller_id`),
  CONSTRAINT `FK2njvpi9drd5upy41ljlwrs4d3` FOREIGN KEY (`buyer_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKaow4fduohuhyek1e4fpbx6wp2` FOREIGN KEY (`dream_card_id`) REFERENCES `dream_card` (`dream_card_id`),
  CONSTRAINT `FKtbliu6paets9jeorfj7lf5yek` FOREIGN KEY (`seller_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wriggle_review`
--

LOCK TABLES `wriggle_review` WRITE;
/*!40000 ALTER TABLE `wriggle_review` DISABLE KEYS */;
/*!40000 ALTER TABLE `wriggle_review` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-06 11:18:51
