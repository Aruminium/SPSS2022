CREATE DATABASE test;
USE test;

CREATE TABLE users (
  id int auto_increment not null PRIMARY key,
  name varchar(32) not null
);