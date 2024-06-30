const db = require('../model/index');

module.exports.getAll = async () => {
  const res = await db.todo.findAll();
  return res;
};

module.exports.set = async (todo) => {
  try {
    const createTodo = await db.todo.create({
      name: todo.name,
      description: todo.description,
      time: todo.time,
      done: todo.done,
    });
    return createTodo;
  } catch (e) {
    console.log(e);
  }
};
module.exports.delete = async (id) => {
    await db.todo.destroy({
        where: {
          id: id,
        },
    });
};

module.exports.update = async (id, up) => {
    try {
      const updatedtodo = await db.todo.update(up, {
        where: {
          id: id,
        },
      });
      return updatedtodo;
    } catch (error) {
      console.log("Id not found");
    }
};
