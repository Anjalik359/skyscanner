// components/FlightResults.js
const FlightResults = ({ flights }) => {
    if (!flights.length) {
        return <p>No flights found.</p>;
    }

    return (
        <ul>
            {flights.map((flight, index) => (
                <li key={index}>
                    {flight.origin} to {flight.destination} - {flight.price}
                </li>
            ))}
        </ul>
    );
};

export default FlightResults;
