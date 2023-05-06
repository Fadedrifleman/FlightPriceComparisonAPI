import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export const useFetch = async (query) => {
	console.log(query);
	const options = {
		method: 'GET',
		url: `https://flight-fare-search.p.rapidapi.com/v2/flight/`,
		params: { ...query },
		headers: {
			'X-RapidAPI-Key': process.env.RAPID_API_KEY,
			'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com',
		},
	};

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};
