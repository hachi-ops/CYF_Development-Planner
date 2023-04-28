CREATE DATABASE dev_planner;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--users
CREATE TABLE users(
    user_id uuid DEFAULT uuid_generate_v4(),
    user_fname VARCHAR(50) NOT NULL,
    user_lname VARCHAR(50) NOT NULL,  
    username VARCHAR(50) NOT NULL UNIQUE,
    user_email VARCHAR(50) NOT NULL UNIQUE,
    user_password VARCHAR(250) NOT NULL,
    user_role VARCHAR(8) NOT NULL,
    PRIMARY KEY (user_id)
);


--drafts
CREATE TABLE drafts (
  draft_id SERIAL,
  user_id UUID,
  draft_title VARCHAR(100),
  draft_text VARCHAR(1000),
  PRIMARY KEY (draft_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE messages (
  message_id SERIAL,
  sender_id UUID,
  receipient_id UUID,
  sender_username VARCHAR,
  message_title VARCHAR(100),
  message_text VARCHAR(1000),
  PRIMARY KEY (message_id),
  FOREIGN KEY (sender_id) REFERENCES users(user_id),
  FOREIGN KEY (receipient_id) REFERENCES users(user_id), 
  FOREIGN KEY (sender_username) REFERENCES users(username)
);