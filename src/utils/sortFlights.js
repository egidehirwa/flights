/**
 * Sorts the flights by departure date.
 * 
 * @param {object} data - The data object. 
 * @property {Array} data.flights - The flights that have to be sorted.
 * @returns {Array} - Sorted flights
 */

const sortFlights = (data) => {
    const sortedFlights = data.flights.sort((a,b) => {
        return new Date(a.departureDate).getTime() - new Date(b.departureDate).getTime();
    });

    return sortedFlights;
}

export default sortFlights;