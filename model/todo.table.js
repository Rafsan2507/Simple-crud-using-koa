module.exports = (Sequelize, DataTypes) => {
  const todo = Sequelize.define("todo", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    time: DataTypes.DATE,
    done: DataTypes.BOOLEAN,
  });
  return todo;
}; 
