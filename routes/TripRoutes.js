const express = require('express');
const {
    retrieveAllTrips   
} = require('../controller/TripController');

const TripRouter = express.Router();

TripRouter
    .route('/')
    .get(retrieveAllTrips);