## Flight Price Calculator

Hosted link: `https://flightprice-9nog.onrender.com`

This is a web application built with Node.js and Express.js that calculates flight prices between two locations.

### Installation

1. Clone the repository: `git clone https://github.com/Fadedrifleman/FlightPriceComparisonAPI.git`
2. Install the dependencies: `npm install`
3. Create a `.env` file and add your API key: `API_KEY=your-api-key`
4. Start the server: `npm start`

### Usage

1. Open your browser and go to `http://localhost:5000`
2. Enter the source and destination locations and click the `Find Flight Price` button
3. The flight prices will be displayed on the screen

### Dependencies

- express
- body-parser
- ejs
- dotenv

### Routes

- `GET /`: Renders the home page
- `POST /flight`: Calculates the flight prices and returns them as JSON
