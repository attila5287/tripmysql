const Traveller = require("./Traveller");
const Location = require("./Location");
const Trip = require("./Trip");


// FK best option:
// A.belongsToMany(B, { through: 'C' }); // A BelongsToMany B through the junction table C

Traveller.belongsToMany(Location, {
	through: {
		model: Trip,
		unique: false
	},
	as: "planned"
});

Location.belongsToMany(Traveller, {
	through: {
		model: Trip,
		unique: false
	},
	as: "trips_of"
});

console.log("\n >> Finalizing DB:\n\t relational database set up! ");

module.exports = { Traveller, Location, Trip };

// A.hasOne(B); // A HasOne B
// A.belongsTo(B); // A BelongsTo B
// A.hasMany(B); // A HasMany B
