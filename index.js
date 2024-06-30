const koa = require("koa");

var banana = new koa();

const serve = require("koa-static");

const PORT = 3000;

const { bodyParser } = require("@koa/bodyparser");

const path = require("path");
const router = require('./router/todo');
const db = require('./model');

banana.use(serve(path.join("./index.html")));

banana.use(bodyParser());
banana.use(router.routes());
banana.use(router.allowedMethods());


banana.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`server is running on http://localhost:${PORT}`);
});
