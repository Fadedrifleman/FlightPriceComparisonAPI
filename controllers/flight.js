import { useFetch } from '../utils/useFetch.js';
import { getAirportCode } from '../utils/getAirportCode.js';

export const getHome = async (req, res) => {
	try {
		res.render('home', { data: null });
	} catch (error) {
		console.log(error);
		res.status(500).json({
			error: error.message,
		});
	}
};

export const getPrices = async (req, res) => {
	const { source, destination } = req.body;
	const sourceIATA = getAirportCode(source);
	const destinationIATA = getAirportCode(destination);
	try {
		const data = await useFetch('flight', {
			from: sourceIATA,
			to: destinationIATA,
			data: new Date().toISOString().slice(0, 10),
			adult: '1',
			type: 'economy',
			currency: 'INR',
		});
		if (data && data.results) {
			const response = data.results.map((flight) => ({
				name: flight.flight_name,
				price: `${flight.totals.currency} ${flight.totals.total}`,
			}));

			if (req.body.hasOwnProperty('frontEnd')) {
				res.render('home', { data: response });
			} else {
				res.status(200).json({ data: response });
			}
		} else {
			res.status(503).json({
				error: 'server is currently unavailable',
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			error: error.message,
		});
	}
};
