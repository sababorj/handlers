CREATE DATABASE wish_saver_db;
USE wish_saver_db;

-- Create the table tasks.
CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('go on a trip');
INSERT INTO wishes (wish) VALUES ('have a job');
INSERT INTO wishes (wish) VALUES ('be a developer');