const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user')(sequelize, Sequelize);

sequelize.sync();

module.exports = {
  sequelize,
  User
};
