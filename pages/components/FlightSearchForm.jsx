// components/FlightSearchForm.js
import { useState } from 'react';

const FlightSearchForm = ({ onSearch }) => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ origin, destination, departureDate, returnDate });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="origin">Origin:</label>
                <input
                    type="text"
                    id="origin"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="destination">Destination:</label>
                <input
                    type="text"
                    id="destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="departureDate">Departure Date:</label>
                <input
                    type="date"
                    id="departureDate"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="returnDate">Return Date:</label>
                <input
                    type="date"
                    id="returnDate"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Search</button>
        </form>
    );
};

export default FlightSearchForm;
