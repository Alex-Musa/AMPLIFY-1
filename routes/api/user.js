const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
    .get(userController.findAll)
    .get(userController.create);

router.route("/:id")
    .delete(userController.remove);

module.exports = router;