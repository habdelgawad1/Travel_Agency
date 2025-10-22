const express = require('express');
const {
    RetrieveAllTrips,
    CreateTrip  
} = require('../controller/TripController');

const TripRouter = express.Router();

TripRouter.route('/')
.get(RetrieveAllTrips)
.post(CreateTrip);

module.exports = TripRouter;