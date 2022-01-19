// const { Pool } = require("pg/lib")

module.exports = function TaxiTrips(pool) {
    const totalTripCount = async() =>{
        var countTotalTrip = await pool.query('SELECT * FROM trip');
        // console.log('????'+countTotalTrip.rowCount);
        return countTotalTrip.rowCount;
    }

    const findAllRegions = async() =>{
        var allRegions = await pool.query('SELECT * FROM region');
        return allRegions.rows;
    }

    const findTaxisForRegion = async(regionID) =>{
        var taxisForRegion = await pool.query('SELECT * from taxi');
        const regionTaxis = [];
        taxisForRegion.rows.forEach(function(regionTaxi){
            regionTaxis.push(regionTaxi.reg_number)
        });
        return regionTaxis;
    }

    // const findTaxisForRegion = async(regionID) =>{
    //     var taxisForRegion = await pool.query('SELECT reg_number from taxi WHERE region_id = $1', [regionID]);
    //     return taxisForRegion.rows;
    // }

    const findTripsByRegNumber = async(reg)=>{
        var tripsByReg = await pool.query('SELECT * from trip join taxi on taxi.id = trip.taxi_id WHERE reg_number = $1', [reg]);
        return tripsByReg.rows;
    }

    const findTripsByRegion = async(regionID)=>{
        let tripsByRegion = await pool.query('SELECT * FROM trip join taxi on taxi.id = trip.taxi_id WHERE region_id = $1', [regionID]);
        return tripsByRegion.rows;

    }


    return{
        totalTripCount,
        findAllRegions,
        findTaxisForRegion,
        findTripsByRegNumber,
        findTripsByRegion
    }
	
}