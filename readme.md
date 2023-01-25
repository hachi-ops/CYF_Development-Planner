How to get started using the application
Application dependencies
More detailed information about how your application uses its data connections
A link to an application website
Licensing information

# Getting started with CYF_Development-Planner

To run this project locally:

- clone or fork this repo onto your machine

- to install the required dependencies run the following command in your terminal:

### `npm install`

- to run the server in your terminal type at the root of the folder

### `node index`

or

### `npm run dev`

- cd to client

# `cd client`

and

### `npm start`

Both server and client should be running

To set up your local database:

- create .env file at the root of the folder:
- values in brackets are arbitrary

PG_USER = <username>
PG_PASSWORD = <password>
PG_HOST = localhost
PG_PORT = 5432
PG_DATABASE = dev_planner

jwtSecret = <"your secret goes here">

- to run the app in the production mode:

# `cd client`

- type the following commands in your terminal

# `npm run build`

and

# `npm start`

next deploy the app on the platform of your choice
