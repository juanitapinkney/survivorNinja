-- Drops the fema if it exists currently --
DROP DATABASE IF EXISTS fema;
-- Creates the "fema" database --
CREATE DATABASE fema;

USE fema;

CREATE TABLE `fema` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `disaster` VARCHAR( 255) NOT NULL,
  `body` VARCHAR( 255 ) NOT NULL,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) );