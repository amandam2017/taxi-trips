// const { Pool } = require("pg/lib")

module.exports = function TaxiTrips() {
    const totalTripCount = async(Pool)=>{
        var trips = await pool.query('SELECT * FROM trip')
        return trips;
    }


    return{

    }
	
}