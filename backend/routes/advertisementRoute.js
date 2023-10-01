const express = require("express");
const { createAdvertisement, getAdvertisements, deleteAdvertisement } = require("../controllers/advertisementController");

const advertisementRoute = express.Router();

advertisementRoute.route("/advertisement").post(createAdvertisement);
advertisementRoute.route("/advertisements").get(getAdvertisements);
advertisementRoute.route("/advertisement/:id").delete(deleteAdvertisement);
module.exports = advertisementRoute;
