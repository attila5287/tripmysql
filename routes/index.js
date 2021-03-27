console.log('\n>> Building app started...');
const router = require('express').Router();

const { Location, Traveller, Trip } = require("../models");
    

// test heroku with no db
router.get("/h", async (req, res) => {
	try {
		res.status(200).json(['Denver', 'Boulder', 'Pueblo']);
	} catch (err) {
		res.status(500).json(err);
	}
});
// LANDING
router.get("/", async (req, res) => {
	try {
		const locationData = await Location.findAll();
		res.status(200).json(locationData);
	} catch (err) {
		res.status(500).json(err);
	}
});

console.log('\n>> Create Tables before first run...\n>> ...');

module.exports = router;
