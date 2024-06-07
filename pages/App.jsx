import { useState } from "react";
import FlightSearchForm from './components/FlightSearchForm';
import FlightResults from './components/FlightResults';

const App = () => {
  const [flights, setFlights] = useState([]);

    const handleSearch = async (searchParams) => {
        const res = await fetch(`/api/searchFlights?origin=${searchParams.origin}&destination=${searchParams.destination}&departureDate=${searchParams.departureDate}&returnDate=${searchParams.returnDate}`);
        const data = await res.json();
        setFlights(data.Quotes);
    };
  return (
    <>
      <div>
            <h1>Flight Search</h1>
            <FlightSearchForm onSearch={handleSearch} />
            <FlightResults flights={flights} />
        </div>
    </>
  );
};

export default App;
