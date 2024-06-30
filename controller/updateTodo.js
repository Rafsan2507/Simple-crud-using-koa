const updateId = require('../query/query');

module.exports.updateTodo = async(ctx) => {
  await updateId.update(ctx.params.id, ctx.request.body);
  ctx.body = "Todo updated";
};

