import data from "../data.js";
import dom from "../dom.js";
import sortFlights from "../utils/sortFlights.js";
import createFlight from "../components/createFlight.js";

const loadHandler = () => {
    const sortedFlights = sortFlights(data);
    sortedFlights.forEach((flight) => {
        const flightContainer = createFlight(flight);
        dom.wrapper.appendChild(flightContainer);
    })
}

export default loadHandler