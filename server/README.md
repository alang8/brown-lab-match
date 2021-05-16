# Project Lab Database

## Getting Started
* Clone the repo
```shell script
git clone --branch <branch_name> https://github.com/FullStackAtBrownTeam/project-lab.git
```

### Starting Server (Express/Node.js App)
* Navigate into the `server` directory
```shell script
cd server
```
* Install dependencies
```shell script
npm install
```
* Install postgresql and make sure it is working
* Edit configurations (default works too) in `config/config.json` file
* Create database using sequelize
```shell script
sequelize db:create
```
* Sync database everytime a change to the models is made
```shell script
node scripts/sync_database.js
```
* Start the server
```shell script
npm start
```