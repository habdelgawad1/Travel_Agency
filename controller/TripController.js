const { trips,GetTripWithDailyCost } = require("../models/TripModel")
const { db } = require("../models/db.js");

const RetrieveAllTrips = (req, res) => {
    const query = "SELECT * FROM Trip";

    db.all(query, [], (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: "Error Retrieving Trips" });
        }
        return res.status(200).json({
            message: "Trips retrieved successfully",
            data: rows,
            });
        });
    };

const RetrieveTripById = (req, res) => {
    const id = Number(req.params.id);
    const query = `SELECT * FROM Trip WHERE id = ${id}`;

    db.get(query, (err, row) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: "Error Retrieving Trips" });
        }
        if (!row) {
            return res.status(404).json({ error: "Trip not found" });
        }
        return res.status(200).json({
            message: "Trips retrieved successfully",
            data: row,
            });
        });
    };

const CreateTrip = (req,res) => {
    const{destination,location,continet,language,description,flightCost,
          hotelCost,foodCost,visacost,currencycode}=req.body;

    if(!destination || !location || !continet || !language || !description ||
       !flightCost || !hotelCost || !foodCost || !visacost || !currencycode)

       {
        return res.status(400).json({
            message: 'Missing required fields: destination, location, continet, language',
        });
    }
    
    const query = `INSERT INTO Trip (destination, location, continet, language, description, 
    flightCost, hotelCost, foodCost, visacost, currencycode)

    VALUES ('${destination}', '${location}', '${continet}', '${language}', '${description}', 
              '${flightCost}', '${hotelCost}', '${foodCost}', '${visacost}', '${currencycode}')`;

    db.run(query, function(err){
        if(err){
            console.log(err);
            return res.status(500).json({
                message: "Error creating Trip",
                error: err.message
            });   
        }
        return res.status(201).json({
            message: "Trip created successfully",
        });
    });
};        


const DeleteTripById = (req,res) => {
    const id = Number(req.params.id);
    const query = `DELETE FROM Trip WHERE id = ${id}`;

    db.run(query, function(err){
        if(err){
            console.log(err);
            return  res.status(500).json({
                message: "Error deleting Trip",
                error: err.message
            });   
        }
        if(this.changes === 0){
            return res.status(404).json({
                message: `Trip not found`
            });
        }
        res.status(200).json({
            status: 'success',
            message: `Trip with id ${id} deleted successfully`
        });
    });
}

const UpdateTripById = (req,res) => {
    const id = Number(req.params.id);
    const{destination,location,continet,language,description,flightCost,
          hotelCost,foodCost,visacost,currencycode}=req.body;
    const query = `UPDATE Trip SET 
    destination='${destination}', location='${location}', continet='${continet}', language='${language}', 
    description='${description}', flightCost='${flightCost}', hotelCost='${hotelCost}', foodCost='${foodCost}', 
    visacost='${visacost}', currencycode='${currencycode}' WHERE id = ${id}`;
    db.run(query, function(err){
        if(err){
            console.log(err);
            return res.status(500).json({
                message: "Error updating Trip",
                error: err.message
            });   
        }if(this.changes === 0){
            return res.status(404).json({
                message: `Trip not found`
            });
        }res.status(200).json({
            status: 'success',
            message: `Trip with id ${id} updated successfully`
        });
    });
}


module.exports = {RetrieveAllTrips, CreateTrip, DeleteTripById, UpdateTripById, RetrieveTripById};
