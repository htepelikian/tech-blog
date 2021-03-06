// set up imports
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//set up object
class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // Validate email
      validate: { isEmail: true },
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      //make sure password has to be at least 5 char
      validate: { len: [5] },
    },
  },

  {
    //add bcrypt hooks here in the future to hash the password 
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;