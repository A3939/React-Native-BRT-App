const asyncHandler = require("express-async-handler");
const Bus = require("../models/busModel");
//@desc get all bus
//@route get /api/BRT
//@access public
const getBusList = asyncHandler(async (req, res) => {
  const busList = await Bus.find();
  res.status(200).json(busList);
});

//@desc Create new bus
//@route post /api/BRT
//@access public
const createBus = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { busNo, start_station, end_station, route } = req.body;
  if (!busNo || !start_station || !end_station || !route) {
    res.status(400);
    throw new Error("All Field are required!");
  }
  const bus = await Bus.create({
    busNo,
    start_station,
    end_station,
    route,
  });
  res.status(201).json(bus);
});

//@desc get bus
//@route get /api/BRT/:id
//@access public
const getBus = asyncHandler(async (req, res) => {
  const bus = await Bus.findById(req.params.id);
  if (!bus) {
    res.status(404);
    throw new Error("Bus not Found");
  }
  console.log("bus");
  res.status(200).json(bus);
});

//@desc search route busList
//@route get /api/BRT/:id:start_station:end_station
//@access public
const getRouteBuses = asyncHandler(async (req, res) => {
  const { start_station, end_station } = req.params;

  // const bus = await Bus.findById(req.params.id);
  const bus = await Bus.find({ route: { $all: [start_station, end_station] } });
  if (!bus) {
    res.status(404);
    throw new Error("Bus not Found");
  }
  res.status(200).json(bus);
});

//@desc update  bus
//@route put /api/BRT/:id
//@access public
const updateBus = asyncHandler(async (req, res) => {
  const bus = await Bus.findById(req.params.id);
  if (!bus) {
    res.status(404);
    throw new Error("Bus not Found");
  }

  const updatedBus = await Bus.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedBus);
});

//@desc delete  bus
//@route delete /api/BRT/:id
//@access public
const deleteBus = asyncHandler(async (req, res) => {
  const bus = await Bus.findById(req.params.id);
  if (!bus) {
    res.status(404);
    throw new Error("Bus not Found");
  }

  const deleteBus = await Bus.findByIdAndDelete(req.params.id);

  res.status(200).json(deleteBus);
});

module.exports = {
  getBusList,
  getBus,
  createBus,
  deleteBus,
  updateBus,
  getRouteBuses,
};
