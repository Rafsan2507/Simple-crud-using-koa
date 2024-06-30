const deleteId = require('../query/query');

module.exports.deleteTodo = async (ctx) => {
  try {
    await deleteId.delete(ctx.params.id);
    ctx.status = 202;
    ctx.body = "Todo deleted";
  } catch (e) {
    console.log("e", e); // eslint-disable-line no-console
    ctx.sendStatus(500);
  }
};
