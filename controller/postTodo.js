const posttodo = require('../query/query');

module.exports.postTodo = async (ctx) => {
  try {
    await posttodo.set(ctx.request.body);
    ctx.status = 200;
    ctx.body ="Message received";
  } catch (e) {
    console.log("e", e); // eslint-disable-line no-console
    ctx.sendStatus(500);
  }
};
