# Node.js Express.js API With Sequelize(ORM)

This is a express restfull api POC for Sequelize (ORM).

# API End points are

> /login

- POST methord
- required email,password
- responce will be email,password,name,authentication key,user id.

> /register

- POST methord
- required name,email,password
- responce will be email,password,name,user id, authentication key.

> /home

- GET methord (Needs Authentication)
- required authentication key in the header link header "Key" value as "auth key sent while responce"
- responce will be a JSON message "Hello"

> /logout

- GET methord
- required authentication key in the header link header "Key" value as "auth key sent while responce"
- responce will be JSON message "Thank You".

### Installation:

requires [Node.js](https://nodejs.org/) v10+ to run.

```sh
$ npm i # to install all the package in package.json file.
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "~4.16.1",
    "mariadb": "^2.5.1",
    "morgan": "^1.10.0",
    "sequelize": "^6.3.5",
    "uniqid": "^5.2.0"
$ node app.js #to start the application
```
