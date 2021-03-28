const router = require("express").Router();
const locations = require('locations');
router.use("/locations", locations);
router.use("/trips", trips);
router.use("/travellers", travellers);

module.exports = router;
