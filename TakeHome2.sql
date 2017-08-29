-- --------------------------------------------------------
-- Host:                         192.168.99.100
-- Server version:               5.7.18 - MySQL Community Server (GPL)
-- Server OS:                    Linux
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for php_dev
CREATE DATABASE IF NOT EXISTS `php_dev` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `php_dev`;

-- Dumping structure for table php_dev.city
CREATE TABLE IF NOT EXISTS `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `state` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `col` double NOT NULL,
  `rent` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table php_dev.city: ~26 rows (approximately)
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` (`id`, `city`, `state`, `col`, `rent`) VALUES
	(1, 'New-York', 'ny', 1106, 3006),
	(2, 'Portland', 'or', 0.8118, 1551),
	(3, 'Los-Angeles', 'ca', 0.8228, 1960),
	(4, 'Denver', 'co', 0.8169, 1577),
	(5, 'Austin', 'tx', 0.7787, 1574),
	(6, 'Nashville', 'tn', 0.7773, 1478),
	(7, 'Seattle', 'wa', 0.9276, 1875),
	(8, 'Washington', 'dc', 0.943, 2128),
	(9, 'San Francisco', 'ca', 1.0146, 3278),
	(10, 'Chicago', 'il', 0.8465, 1802),
	(11, 'Boston', 'ma', 0.9073, 2442),
	(12, 'Minneapolis', 'mn', 0.8553, 1349),
	(13, 'Dallas', 'tx', 0.6974, 1229),
	(14, 'Houston', 'tx', 0.7616, 1356),
	(16, 'San-Jose', 'ca', 0.8449, 2414),
	(17, 'Indianapolis', 'in', 0.8078, 1102),
	(18, 'Philadelphia', 'pa', 0.8743, 1568),
	(19, 'San-Diego', 'ca', 0.7908, 1804),
	(20, 'Phoenix', 'az', 0.7111, 974),
	(21, 'Kansas-City', 'mo', 0.6883, 909),
	(22, 'Miami', 'fl', 0.9125, 1879),
	(23, 'New-Orleans', 'la', 0.8199, 1420),
	(24, 'Pittsburgh', 'pa', 0.8173, 1148),
	(25, 'Cleveland', 'oh', 0.786, 931),
	(26, 'Oklahoma-City', 'ok', 0.668, 830),
	(27, 'Sacramento', 'ca', 0.8236, 1240);
/*!40000 ALTER TABLE `city` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
