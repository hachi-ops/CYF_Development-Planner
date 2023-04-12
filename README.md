# Getting Setup

## Requirements

Currently for developing purposes the app requires developers to have access to a local database. 
I used psql / postgres, but you may use which ever postgres variant you prefer.

If you haven't already go ahead and download psql / postgres.

## What's in the App?

There are two main folders.

1. The root directory - where database related work is kept.
2. the client directorty - where the main app is housed.

Start by installing with `npm i`

Once you have all the modules. Run `npm run build`. Without this, you will get the error.  
`Unable to find client/build/index.html` error.

Next add your postgres database related environment variables to the root directory (not the client directory). The project needs to create a database which will require superuser privileges. which the following should cover, you may have a different password.

```
PG_USER=postgres
PG_PASSWORD=password
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=dev_planner
jwtSecret="cyf123"
```

## Running the db.sql Script

Next it's time to run the database script in the root level. I will talk through how to do this using psql.

For context the command `psql` can be executed in any directory, likewise targeting an existing database does NOT require you to move to the database directory. It's easiest to use the superuser profile `postgres` and you can do this with the flag `-U`

### flags

The flags needed in this project are;

-U -> defines what username you wish to use.
-f -> defines the filename you want to target.
-d -> defines the database you want to target.

### The command to run the file

**Note currently the `create database` command is in the same file as the other SQL related commands. You may need to run the script twice. Once to create the database and once to ensure that the following SQL commands target the desired database.**

`psql -U postgres -f db.sql` -> Run this first to ensure the dev_planner database is created.  
`psql -U postgres -d dev_planner -f db.sql` -> Run this second to ensure the database contains the correct tables and schema.