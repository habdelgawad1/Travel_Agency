const express = require('express');
const {
    RetrieveAllTrips,
    CreateTrip,
    DeleteTripById
} = require('../controller/TripController');

const TripRouter = express.Router();

TripRouter.route('/')
.get(RetrieveAllTrips)
.post(CreateTrip);

TripRouter.route('/:id')
.delete(DeleteTripById);

module.exports = TripRouter;