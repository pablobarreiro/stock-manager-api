const express = require("express");
const productControllers = require("../controllers/productControllers");
const router = express.Router();

router.get("/all",productControllers.getAll);
router.post('/add', productControllers.add);
router.post('/bulkAdd', productControllers.bulkAdd);
router.put('/edit/:id', productControllers.edit);
router.delete('/delete/:id', productControllers.delete);
router.delete('/db', productControllers.clearDB);


module.exports = router;
