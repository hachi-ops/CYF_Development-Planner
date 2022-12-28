CREATE DATABASE dev_planner;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
    user_id uuid DEFAULT uuid_generate_v4(),
    user_fname VARCHAR(50) NOT NULL,
    user_lname VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    user_email VARCHAR(50) NOT NULL UNIQUE,
    user_password VARCHAR(250) NOT NULL,
    user_role VARCHAR(8) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE feedbacks(    
    feedback_id SERIAL,
    user_id UUID,
    feedback VARCHAR(1000),
    PRIMARY KEY (feedback_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

insert into users (user_fname, user_lname, username, user_email, user_password, user_role) values ('abc', 'abc', 'abc', 'abc@gmail.com', 'abc', 'mentor');

insert into users (user_fname, user_lname, username, user_email, user_password, user_role) values ('hello', 'hello', 'hello', 'hello@gmail.com', 'hello', 'mentor');

insert into feedbacks (user_id, feedback) values ('dd8a0bda-8a29-428e-b9cb-1978d93720a7', 'This is my feedback, read it.');


insert into feedbacks (user_id, feedback) values ('dd8a0bda-8a29-428e-b9cb-1978d93720a7', 'lorem ipsum lorem ipsum lorem ipsum');

select * from users inner join feedbacks on users.user_id = feedbacks.user_id;   