const asyncHandler = require("express-async-handler");
const Promotion = require("../models/promotionModel");

//@desc get all advertisements
//@route get /api/advertisements
//@access public
const getAdvertisements = asyncHandler(async (req, res) => {
    const advertisements = await Promotion.find();
    res.status(200).json(advertisements);
});

//@desc Create new Advertisement
//@route post /api/advertisement
//@access public
const createAdvertisement = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { advertisement, advertisementImage, advertisementLink } = req.body;
    if (!advertisement || !advertisementImage || !advertisementLink ) {
        res.status(400);
        throw new Error("All Field are required!");
    }
    const advertisementStore = await Promotion.create({
        advertisement, advertisementImage, advertisementLink 
    });
    res.status(201).json(advertisementStore);
});

//@desc delete  Advertisement
//@route delete /api/advertisement/:id
//@access public
const deleteAdvertisement = asyncHandler(async (req, res) => {
    const advertisementStore = await Promotion.findById(req.params.id);
    if (!advertisementStore) {
        res.status(404);
        throw new Error("Advertisement not Found");
    }

    const deleteAd = await Promotion.findByIdAndDelete(req.params.id);

    res.status(200).json(deleteAd);
});


module.exports = {
    createAdvertisement,
    getAdvertisements,
    deleteAdvertisement
};
