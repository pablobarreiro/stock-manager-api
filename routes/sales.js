const express = require("express");
const salesControllers = require("../controllers/salesControllers");
const router = express.Router();

router.post("/confirm", salesControllers.confirm);
router.get("/all", salesControllers.getAll);
router.get('/one/:orderNumber', salesControllers.getOne)

module.exports = router;
