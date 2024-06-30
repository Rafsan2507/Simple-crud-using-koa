const getTodo = require('../query/query');

module.exports.getTodos = async (ctx) => {
  try {
    const todos = await getTodo.getAll();
    ctx.status = 200;
    ctx.body = todos;
  } catch (e) {
    console.log("e", e); // eslint-disable-line no-console
    ctx.sendStatus(500);
  }
};