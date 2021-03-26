FoodSwap Webapp
================

FoodSwap is a webapp to allow people sharing and exchanging food over a simple platform! 🍰

## Table of content

- [FoodSwap Webapp](#foodswap-webapp)
  - [Table of content](#table-of-content)
  - [Tech uses](#tech-uses)
  - [Installation](#installation)
  - [Migrate and seed the database the first time](#migrate-and-seed-the-database-the-first-time)
  - [Run the project](#run-the-project)
  - [Develop](#develop)

## Tech uses

For the front, we are using:
  - React
  - Redux
  - React-router
  - React-select
  - React-toastify
  - React-slick && slick-carousel

For the api, we are using:
  - Node.js
  - Express, cors, body-parser
  - bcrypt, jsonwebtoken
  - pg, Joi, Sequelize
  - Multer

## Installation

To install the project, just run this 3 commands:

```
npm install
npm install --prefix apps/front
npm install --prefix apps/back
```

You need to copy, and maybe adapt, the two .env.dev files on front and back folders.

```
cp apps/back/.env.dev apps/back/.env
cp apps/front/.env.dev apps/front/.env
```

## Migrate and seed the database the first time
For migration and seed, we are using `umzug`.     
The first time you run the project, you need to run `docker-compose up` at the root of the project.     
After that, go to the `apps/back` folder and run `npm run migrate:up`, that create the schema of the database for each models. Then, run the `npm run seed:up` to put data into database.

## Run the project

At root, you can just run `npm start` and that will run all apps, with a PgSQL dockerized, and a database for test.

At the background, the `docker-compose up` command was run and start PgSQL, when
the PgSQL on port `5432` is available, the command to run the back is launched, when the back run on port `3000`, the command to run the front is launched.

Front is available at http://localhost:4200     
Api is available at http://localhost:3000/v1     
PgAdmin is available at http://localhost:8080     

You can connect with a test seed user, just check the file `/apps/back/db/seeds/2021.03.25T01.00.00.create_authors.js` to know what user is available.
## Develop

To develop as good as possible, we have made a Settings Sync for your VsCode, you can use this gist, to be sync with our standards `e1baeec2d3943ac8af32c54d5d97f520`.    
You need to install https://github.com/tonsky/FiraCode fonts on your system too.

We are using the GitFlow mentality, so please following it, more details here https://danielkummer.github.io/git-flow-cheatsheet/.
