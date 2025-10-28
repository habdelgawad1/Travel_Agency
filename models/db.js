const sqlite = require('sqlite3');
const db = new sqlite.Database('Travel.db');

const CreateTripTable = `CREATE TABLE IF NOT EXISTS Trip (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    destination TEXT NOT NULL,
    location TEXT NOT NULL,
    continet TEXT NOT NULL,
    language TEXT NOT NULL,
    description TEXT DEFAULT 0,
    flightCost REAL DEFAULT 0,
    hotelCost REAL DEFAULT 0,
    foodCost REAL DEFAULT 0,
    visacost REAL DEFAULT 0,
    currencycode TEXT DEFAULT 'N/A'
)`;

module.exports = { 
    db, 
    CreateTripTable 
};
