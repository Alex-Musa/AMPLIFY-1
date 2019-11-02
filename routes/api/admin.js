const router = require("express").Router();
const adminController = require("../../controllers/adminController");

router.route("/")
    .get(adminController.findAll)
    .get(adminController.create);

router.route("/:id")
    .delete(adminController.remove);

module.exports = router;