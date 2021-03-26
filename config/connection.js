const Sequelize = require("sequelize");
require("dotenv").config();
const app_on_heroku = (process.env.ON_AIR == true);
console.log('\n>> Connecting to DB at:');

let sequelize; // conditionally branched

if (app_on_heroku) {
process.env.JAWSDB_URL;
sequelize = new Sequelize(process.env.JAWSDB_URL);
console.log("\t App runs Heroku:  JawsDB ");

}

if (!app_on_heroku) {
console.log("\t App runs Local:  mySQL ");
sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		host: "localhost",
		dialect: "mysql",
		port: 3306,
	}
);
	
}


console.log("\t schema: "+ process.env.DB_NAME + "(pre-set)");
console.log("\t username   : ", process.env.DB_USER);
console.log("\t password   : ", process.env.DB_PASSWORD);

module.exports = sequelize;
