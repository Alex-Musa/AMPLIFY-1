const router = require("express").Router();
const userRoutes = require("./user");
const adminRoutes = require("./admin");

// admin routes
router.use("/admin", adminRoutes);

// user routes
router.use("/users", userRoutes);
module.exports = router;
