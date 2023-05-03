import axios from 'axios';

export const getHome = async (req, res) => {
	try {
		const dummyData = {
			data: [
				{ name: 'airAsia', price: 5000 },
				{ name: 'indigo', price: 4600 },
				{ name: 'vistara', price: 3679 },
			],
		};
		res.render('home',{data: null});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};

export const getPrices = async (req, res) => {
	try {
		const dummyData = {
			data: [
				{ name: 'airAsia', price: 5000 },
				{ name: 'indigo', price: 4600 },
				{ name: 'vistara', price: 3679 },
			],
		};
		res.render('home',{data: null});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};
