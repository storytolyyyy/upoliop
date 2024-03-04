// Importing necessary modules
const axios = require('axios');

// Function to fetch cryptocurrency data from an API
async function getCryptoData(coin) {
    try {
        // Make HTTP request to fetch cryptocurrency data
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`);
        
        // Extract relevant data from the response
        const data = response.data;
        const name = data.name;
        const symbol = data.symbol;
        const currentPrice = data.market_data.current_price.usd;
        const marketCap = data.market_data.market_cap.usd;
        const totalVolume = data.market_data.total_volume.usd;

        // Return cryptocurrency data
        return {
            name,
            symbol,
            currentPrice,
            marketCap,
            totalVolume
        };
    } catch (error) {
        // Handle errors
        console.error('Error fetching cryptocurrency data:', error.message);
        return null;
    }
}

// Export the function to make it usable as an npm package
module.exports = getCryptoData;
