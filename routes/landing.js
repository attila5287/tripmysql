const landing = [
	{
		route: "GET",
		method: "/api/travellers",
		description: "returns all traveller data"
	},
	{
		route: "POST",
		method: "/api/travellers/:id",
		description: "creates traveller data and returns a successful response"
	},
	{
		route: "GET",
		method: "/api/travellers/:id",
		description:
			"returns a single traveller's data with their associated trips and a list of locations"
	},
	{
		route: "DELETE",
		method: "/api/travellers/:id",
		description:
			"removes a traveller and any trips associated with them and returns a successful response"
	},
	{
		route: "GET",
		method: "/api/locations",
		description: "returns all location data"
	},
	{
		route: "POST",
		method: "/api/locations",
		description: "creates location data and returns a successful response"
	},
	{
		route: "GET",
		method: "/api/locations/:id",
		description: "returns a single location's data, with its associated trips"
	},
	{
		route: "DELETE",
		method: "/api/locations/:id",
		description:
			"removes a location and any trips associated with it and returns a successful response"
	},
	{
		route: "POST",
		method: "/api/trips",
		description: "creates trip data between associated travellers and locations"
	},
	{
		route: "DELETE",
		method: "/api/trips/:id",
		description: "removes a trip and returns a successful response"
	}
];

module.exports = landing;
