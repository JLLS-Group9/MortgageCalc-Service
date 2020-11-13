/* mysql -u root < schema.sql */
DROP DATABASE IF EXISTS trulia;

CREATE DATABASE trulia;

USE trulia;

CREATE TABLE home_prices (
  id int NOT NULL auto_increment,
  home_price int,
  property_tax int,
  hoa int,
  PRIMARY KEY (id)
);