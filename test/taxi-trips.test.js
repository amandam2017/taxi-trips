let assert = require("assert");
let TaxiTrips = require("../taxi-trips");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://codex:pg123@localhost:5432/taxi_trips';

const pool = new Pool({
    connectionString
});


describe('Taxi Trips', function () {

    // beforeEach(async function () {
        
    // });

    it('should find how many trips all the taxis made', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.equal(3, await taxiTrips.totalTripCount());
    

    });

    it('should find all the regions', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual([
             {
                    id: 1,
                    region_name: "Gauteng"
                  },
                  {
                    id: 2,
                    region_name: "Cape Town"
                  },
                  {
                    id: 3,
                    region_name: "Durban"
                  }
        ], await taxiTrips.findAllRegions());

    });

    it('should find all the taxis for a region', async function () {
        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual([
            {
                reg_number: 'GP 125478',
                reg_number:'CY 125478',
                reg_number:'NUZ 125478'

            }           

    ], await taxiTrips.findTaxisForRegion(3));
        // assert.deepStrictEqual([{reg_number:'CY 125478'}], await taxiTrips.findTaxisForRegion(1));
        // assert.deepStrictEqual([{reg_number:'NUZ 125478'}], await taxiTrips.findTaxisForRegion(1));

    })

    it('should find all the trips for a reg number', async function () {

        const taxiTrips = TaxiTrips(pool);
        
        assert.deepStrictEqual([], await taxiTrips.findTripsByRegNumber('...'));
        assert.deepStrictEqual([], await taxiTrips.findTripsByRegNumber('***'));

    });

    // it('should find the total number of trips by region', async function () {

    //     const taxiTrips = TaxiTrips(pool);

    //     assert.deepStrictEqual([1], await taxiTrips.findTripsByRegion('Cape Town').length);
    //     assert.deepStrictEqual([1], await taxiTrips.findTripsByRegion('Gauteng').length);
    //     assert.deepStrictEqual([1], await taxiTrips.findTripsByRegion('Gauteng').length);

    // });

    // it('find the total income for a given reg number', async function () {

    //     const taxiTrips = TaxiTrips(pool);
    //     assert.deepStrictEqual(0, taxiTrips.findIncomeByRegNumber('...').length);
    //     assert.deepStrictEqual(0, taxiTrips.findIncomeByRegNumber('***').length);

    // });

    // it('find the total income for each taxi', async function () {

    //     const taxiTrips = TaxiTrips(pool);
    //     assert.deepStrictEqual([{}, {}, {}], taxiTrips.findTotalIncomePerTaxi());

    // });

    // it('find the total income for all the taxis', async function () {
    //     const taxiTrips = TaxiTrips(pool);
    //     assert.deepStrictEqual(0.00, taxiTrips.findTotalIncome());
    // });


    after(function () {
        pool.end();
    });

});