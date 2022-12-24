CREATE DATABASE dev_planner;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_fname VARCHAR(50) NOT NULL,
    user_lname VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    user_email VARCHAR(50) NOT NULL UNIQUE,
    user_password VARCHAR(250) NOT NULL,
    user_role VARCHAR(8) NOT NULL
);

-- CREATE TABLE entries(
--     entry_id SERIAL,
--     user_id UUID,
--     entry_text VARCHAR(500) NOT NULL,
--     PRIMARY KEY (entry_id),
--     FOREIGN KEY (user_id) REFERENCES users(user_id)
-- );


insert into entries (user_id, entry_text) values ('995854e1-a6bd-4095-b788-dbf44f39037a', 'jhouewhrfdjksvhobudjkshfxljfkhd');

CREATE TABLE feedbacks(    
    feedback_id SERIAL,
    feedback VARCHAR(200)
);