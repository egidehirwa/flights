import sortFlights from "./sortFlights.js";

describe('Sorts the flights by departure date', () => {
    test('Sort 2 flights', () => {
        const actual = sortFlights({
            flights: [
                {
                    id: 2,
                    name: 'KK-021',
                    plane: 'ATR021',
                    departureDate: '2023-09-29 13:45:00',
                    origin: 'DAC',
                    arrivalDate: '2023-09-30 15:40:00',
                    destination: 'CGP',
                    stops: 9,
                },
                {
                    id: 1,
                    name: 'VQ-903',
                    plane: 'ATR725',
                    departureDate: '2023-08-05 13:45:00',
                    origin: 'DAC',
                    arrivalDate: '2023-08-05 14:40:00',
                    destination: 'CGP',
                    stops: 0,
                }
            ]
        });
        expect(actual).toEqual([
            {
                id: 1,
                name: 'VQ-903',
                plane: 'ATR725',
                departureDate: '2023-08-05 13:45:00',
                origin: 'DAC',
                arrivalDate: '2023-08-05 14:40:00',
                destination: 'CGP',
                stops: 0,
            },
            {
                id: 2,
                name: 'KK-021',
                plane: 'ATR021',
                departureDate: '2023-09-29 13:45:00',
                origin: 'DAC',
                arrivalDate: '2023-09-30 15:40:00',
                destination: 'CGP',
                stops: 9,
            }
        ]);
    });
});
