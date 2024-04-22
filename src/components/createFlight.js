const createFlight = (flight) => {
            // CREATE CONTAINER
            const flightContainer = document.createElement('ul');
            flightContainer.className = 'flight';
    
            // NAME
            const name = document.createElement('li');
            name.className = 'name';
            name.innerText = flight.name;
    
            // PLANE
            const plane = document.createElement('li');
            plane.className = 'plane';
            plane.innerText = flight.plane;
    
            // DEPARTURE
            const departure = document.createElement('li');
            departure.className = 'departure';
            departure.innerText = flight.departureDate;
    
            // ORIGIN
            const origin = document.createElement('li');
            origin.className = 'origin';
            origin.innerText = flight.origin;
    
            // ARRIVAL
            const arrival = document.createElement('li');
            arrival.className = 'arrival';
            arrival.innerText = flight.arrivalDate;
    
            // DESTINATION
            const destination = document.createElement('li');
            destination.className = 'destination';
            destination.innerText = flight.destination;
    
            // STOPS
            const stops = document.createElement('li');
            stops.className = 'stops';
            stops.innerText = flight.stops;
    
            flightContainer.append(name, plane, departure, origin, arrival, destination, stops);

            return flightContainer;
};

export default createFlight;