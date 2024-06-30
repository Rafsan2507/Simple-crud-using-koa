const Router = require("koa-router");

const router = new Router();

const { getTodos }  = require('../controller/getTodos');
const { postTodo } = require('../controller/postTodo');
const { deleteTodo } = require('../controller/deleteTodo');
const { updateTodo } = require('../controller/updateTodo');

router.get("/read", getTodos);
router.post("/create", postTodo);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

module.exports = router;
