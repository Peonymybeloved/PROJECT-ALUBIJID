const router = require("express").Router();
const controller = require("../controllers/CRIDDdocument.controller");

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.delete("/:id", controller.delete);

module.exports = router;

