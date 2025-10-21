const { getTripWithDailyCost } = require("../models/TripModel")

const retrieveAllTrips = (req, res) => {
    const AllTrips = getTripWithDailyCost();
    res.status(200).json({
        status: 'success',
        message: 'Retrieved all trips successfully',
        data: AllTrips,
        results: AllTrips.length
    });
}

