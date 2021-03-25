![globe](https://raw.githubusercontent.com/attila5287/img_readme/main/all/globe_bw.png  "globe")| `TripMySQL`
|---|---|
 ![h](https://raw.githubusercontent.com/attila5287/img_readme/main/all/h.png  "globe") | [tripmysql.herokuapp.com](http://tripmysql.herokuapp.com/)

```
> Create an account.
> Create a new trip using a location from a list.
> Create and view location data.
> View all of the trips along with their locations.
```

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
|![chk][0]| `traveller_id`: FK (`Traveller.id`)
|![chk][0]| `location_id`: FK (`Location.id`)


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

