const express = require("express");
const {
  getBusList,
  createBus,
  updateBus,
  deleteBus,
  getBus,
} = require("../controllers/busController");

const router = express.Router();

router.route("/").get(getBusList);

router.route("/").post(createBus);

router.route("/:id").get(getBus).put(updateBus).delete(deleteBus);

module.exports = router;
