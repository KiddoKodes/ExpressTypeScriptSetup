import sequelize from "../sequelize";
import * as Sequelize from "sequelize";

export default sequelize.define("user", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  isVerified: {
    type: Sequelize.TINYINT,
    defaultValue: 0,
  },
  mobile: {
    type: Sequelize.STRING,
  },
  gender: {
    type: Sequelize.ENUM("male", "female"),
  },
  dob: {
    type: Sequelize.DOUBLE,
  },
  passwordHash: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.TINYINT,
  },
  createdAt: {
    type: Sequelize.DOUBLE,
  },
  last_activity: {
    type: Sequelize.DOUBLE,
  },
  updatedAt: {
    type: Sequelize.DOUBLE,
  },
});
