const express = require("express");
const routes = require("../../routes");
const sequelize = require("../../config/connection");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log("\n>> App started and listens at:\n\t PORT :" + PORT + "\n")).catch((err) => {
		console.log('err :>> ', err);
	});;
});;
});
