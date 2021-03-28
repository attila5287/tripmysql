const router = require("express").Router();
const locations = require('./locations');
const trips = require("./trips");
const travellers = require("./travellers");
router.use("/locations", locations);
router.use("/trips", trips);
router.use("/travellers", travellers);

module.exports = router;
