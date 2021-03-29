console.log('\n>> Building app started...');
const router = require('express').Router();

const { Location, Traveller, Trip } = require("../models");
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
const path = require('path');
const landing = require('./landing');
// LANDING
router.get("/", async (req, res) => {
	try {
		res.sendFile(path.join(__dirname, "index.html"));
	} catch (err) {
		res.status(500).json(err);
	}
});


router.get("/routes", async (req, res) => {
	try {
		res.status(200).json(landing);
	} catch (err) {
		res.status(500).json(err);
	}
});

console.log('\n>> Create Tables before first run...\n>> ...');

module.exports = router;
