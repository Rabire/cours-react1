const Sequelize = require("sequelize");

const casinoModel = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  webSiteName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  link: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  imageDescription: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
};

module.exports = casinoModel;
