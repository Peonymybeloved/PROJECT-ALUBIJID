const router = require("express").Router();
const controller = require("../controllers/workflow.controller");

router.post("/:id/assign", controller.assign);
router.post("/:id/approve", controller.approve);

module.exports = router;
