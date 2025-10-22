const { trips,GetTripWithDailyCost } = require("../models/TripModel")

const RetrieveAllTrips = (req, res) => {
    const AllTrips = GetTripWithDailyCost();
    res.status(200).json({
        status: 'success',
        message: 'Retrieved all trips successfully',
        data: AllTrips,
        results: AllTrips.length
    });
}

const CreateTrip = (req,res) => {
    const{
        destination,
        location,
        continet, 
        language,
        description,
        flightCost, 
        hotelCost, 
        foodCost, 
        visacost, 
        currencycode,
    }=req.body;

    const newTrip = {
        id: trips.length + 1,
        destination,
        location,
        continet,
        language,
        description,
        flightCost,
        hotelCost,
        foodCost,
        visacost,
        currencycode,
}
trips.push(newTrip);
}

const DeleteTripById = (req,res) => {
    const id = Number(req.params.id);
    const index = trips.findIndex(trip => trip.id === id);
    trips.splice(index, 1);
    res.status(200).json({
        status: 'success',
        message: `Trip with id ${id} deleted successfully`
    });
}

module.exports = {RetrieveAllTrips, CreateTrip, DeleteTripById};
