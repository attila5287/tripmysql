![globe](https://raw.githubusercontent.com/attila5287/img_readme/main/all/globe_bw.png  "globe")| `TripMySQL`
|---|---|
 ![h](https://raw.githubusercontent.com/attila5287/img_readme/main/all/h.png  "globe") | [tripmysql.herokuapp.com](http://tripmysql.herokuapp.com/)

```
> Create an account.
> Create a new trip using a location from a list.
> Create and view location data.
> View all of the trips along with their locations.
```
|---|TODO|
|---|---|
|![chk][1]|create schema (manual), create tables (auto by init), DB relations/foreign keys|
|![chk][1]|insert demo locations (man.) for landing page '/'|
|![chk][0]|run seed.js? access denied? manual|
|![chk][0]| JawsDB add-on + Env vars for heroku|


![sql](https://raw.githubusercontent.com/attila5287/img_readme/main/all/sql-icon.png  "sql") DB Models
======

|Traveller|Fields|
|--- |---|
|![chk][1]| `id`: primary key, `name`,  `email` |

|**Location**|Fields|
|--- |---|
|![chk][1]|  `id`: primary key, `name`

**Trip**|Fields|
|---|---|
|![chk][1]|`id`: primary key, `trip_budget`, `traveller_amount`
|![chk][1]| `traveller_id`: FK (`Traveller.id`)
|![chk][1]| `location_id`: FK (`Location.id`)


![chk](https://raw.githubusercontent.com/attila5287/img_readme/main/all/routing.png) |URL|Logic|
|---|---|---|
GET | `/api/travellers`| returns all traveller data without associated trips in Insomnia Core.
POST | `/api/travellers`| creates traveller data and returns a successful response in Insomnia Core.
GET | `/api/travellers/:id`| returns a single traveller's data with their associated trips and a list of locations in Insomnia Core.
DELETE | `/api/travellers/:id` | removes a traveller and any trips associated with them and returns a successful response in Insomnia Core.
GET | `/api/locations` | returns all location data in Insomnia Core.
POST | `/api/locations` |creates location data and returns a successful response in Insomnia Core.
GET | `/api/locations/:id`| returns a single location's data, with its associated trips, in Insomnia Core.
DELETE | `/api/locations/:id` |removes a location and any trips associated with it and returns a successful response in Insomnia Core.
POST  | `/api/trips`| creates trip data between associated travellers and locations.
DELETE  | `/api/trips/:id`| removes a trip and returns a successful response in Insomnia Core.


| ![dev]( https://raw.githubusercontent.com/attila5287/img_readme/main/all/dev.jpg "dev-icon") | About Developer | 
| -------------   | -------------: |
| Repos | [github.com/attila5287 ](https://github.com/attila5287/) |
| Profile | [ attila5287.github.io ](https:///attila5287.github.io/) |
| Email    |  atiturkoz@hotmail.com | 


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 



[0]: https://raw.githubusercontent.com/attila5287/img_readme/main/all/checkbox0.png
[1]: https://raw.githubusercontent.com/attila5287/img_readme/main/all/checkbox1.png

[2]: https://raw.githubusercontent.com/attila5287/img_readme/main/all/sql-icon.png

[3]: https://raw.githubusercontent.com/attila5287/tripmysql/main/assets/first_response.JPG
POST methods
======
> Insomnia Core to check post methods, captions below:

`/api/locations`
![post-loc][4]
`/api/travellers`
![post-trv][5]
`/api/trips`
![post-trip][6]

[4]: https://raw.githubusercontent.com/attila5287/tripmysql/main/assets/post_location.JPG

[5]: https://raw.githubusercontent.com/attila5287/tripmysql/main/assets/post_traveller.JPG

[6]: https://raw.githubusercontent.com/attila5287/tripmysql/main/assets/post_trip.JPG

DELETE methods
=======
> Insomnia Core to check delete methods, captions below:

`/api/locations`
![delete-loc][7]
`/api/travellers`
![delete-trv][8]
`/api/trips`
![delete-trip][9]

[7]: https://raw.githubusercontent.com/attila5287/tripmysql/main/assets/delete_location.JPG
[8]: https://raw.githubusercontent.com/attila5287/tripmysql/main/assets/delete_traveller.JPG
[9]: https://raw.githubusercontent.com/attila5287/tripmysql/main/assets/delete_trip.JPG
