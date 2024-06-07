// pages/api/searchFlights.js
import axios from 'axios';

export default async function handler(req, res) {
    const { origin, destination, departureDate, returnDate } = req.query;

    try {
        const response = await axios.get('https://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/USD/en-US', {
            params: {
                originPlace: origin,
                destinationPlace: destination,
                outboundDate: departureDate,
                inboundDate: returnDate,
                apiKey: process.env.SKYSCANNER_API_KEY,
            },
        });

        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching flight data' });
    }
}
