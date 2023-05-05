import axios from "axios";

export const useFetch = async (endPoint, query) => {
    console.log(query);
    const options = {
        method: 'GET',
        url: `https://flight-fare-search.p.rapidapi.com/v2/${endPoint}/`,
        params: { ...query},
        headers: {
          'X-RapidAPI-Key': '2b8062ca79msh06cb5f66ee648e3p119adejsn537f7d76a65e',
          'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          return response.data;
      } catch (error) {
          return {error: error.message};
      }
}