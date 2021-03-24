FoodSwap Webapp
================

FoodSwap is a webapp to allow people sharing and exchanging food over a simple platform! 🍰

## Table of content

- [FoodSwap Webapp](#foodswap-webapp)
  - [Table of content](#table-of-content)
  - [Tech uses](#tech-uses)
  - [Installation](#installation)
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
## Run the project

At root, you can just run `npm start` and that will run all apps, with a PgSQL dockerized, and a database for test.

At the background, the `docker-compose up` command was run and start PgSQL, when
the PgSQL on port `5432` is available, the command to run the back is launched, when the back run on port `3000`, the command to run the front is launched.

## Develop

To develop as good as possible, we have made a Settings Sync for your VsCode, you can use this gist, to be sync with our standards `e1baeec2d3943ac8af32c54d5d97f520`.    
You need to install https://github.com/tonsky/FiraCode fonts on your system too.

We are using the GitFlow mentality, so please following it, more details here https://danielkummer.github.io/git-flow-cheatsheet/.
