module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define("image", {
    description: {
      type: DataTypes.STRING,
    },
    startdate: {
      type: DataTypes.DATE,
    },
    enddate: {
      type: DataTypes.DATE,
    },
    type: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    data: {
      type: DataTypes.BLOB("long"),
    },
  });

  return Image;
};
