const sequelize = require("../config/connection");
const { Traveller, Location, Trip } = require("../models");

const demo_travs = require('./demo_travs.json');
const demo_locs = require('./demo_locs.json');

const seedDatabase = async () => {
  // FORCE >> DROP DATABASE IF EXISTS
  await sequelize.sync({ force: true });
  // await sequelize.sync({ force: false });
  const travellers = await Traveller.bulkCreate(demo_travs);

  const locations = await Location.bulkCreate(demo_locs);

  // Create trips at random
  for (let i = 0; i < 10; i++) {
    // Get a random traveller's `id`
console.log('randomTravellerId');
// console.log(randomTravellerId);
console.log('-----');
    const { id: randomTravellerId } = travellers[
      Math.floor(Math.random() * travellers.length)
    ];

    // Get a random location's `id`
    const { id: randomLocationId } = locations[
      Math.floor(Math.random() * locations.length)
    ];

    // Create a new trip with random `trip_budget` and `traveller_amount` values, but with ids selected above
    await Trip.create({
      trip_budget: (Math.random() * 10000 + 1000).toFixed(2),
      traveller_amount: Math.floor(Math.random() * 10) + 1,
      traveller_id: randomTravellerId,
      location_id: randomLocationId
    }).catch((err) => {
      // If there's an error, such as the same random pairing of `traveller.id` and `location.id` occurring and we get a constraint error, don't quit the Node process
      console.log(err);
    });
  }
  process.exit(0);

};

seedDatabase();
