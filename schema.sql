-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
-- CREATE YOUR TABLES
-- ADD RECORDS TO YOUR TABLE

DROP DATABASE IF EXISTS CowList;
CREATE DATABASE IF NOT EXISTS CowList;

USE CowList;

CREATE TABLE cows (
  id INT AUTO_INCREMENT NOT NULL,
  cowName VARCHAR(30) NOT NULL,
  cowDescription VARCHAR(250) NOT NULL,
  PRIMARY KEY(id)
);