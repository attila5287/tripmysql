const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		host: "localhost",
		dialect: "mysql",
		port: 3306,
	}
);
console.log('\n>> Connecting to DB at:');
console.log("\t name: "+ process.env.DB_NAME + "(pre-created)");
console.log("\t username   : ", process.env.DB_USER);
console.log("\t password   : ", process.env.DB_PASSWORD);

module.exports = sequelize;
