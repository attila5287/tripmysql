const Traveller = require("./Traveller");
const Location = require("./Location");
const Trip = require("./Trip");

Traveller.belongsToMany(Location, {
	through: {
		model: Trip,
		unique: false
	},
	as: "trips_togo"
});

Location.belongsToMany(Traveller, {
	through: {
		model: Trip,
		unique: false
	},
	as: "trippers_tobe"
});

console.log("\n >> Finalizing DB:\n\t relational database set up! ");

module.exports = { Traveller, Location, Trip };
