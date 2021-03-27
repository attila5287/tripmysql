const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Trip extends Model {}

Trip.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		traveller_amount: {
			type: DataTypes.INTEGER,
			defaultValue: 1
		},
		trip_budget: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: true
		},
		// Foreign Key
		traveller_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "traveller",
				key: "id",
				unique: false
			}
		},
		// Foreign Key
		location_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "location",
				key: "id",
				unique: false
			}
		}
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "trip"
	}
);

module.exports = Trip;
