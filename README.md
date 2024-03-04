# upoliop

A simple npm package for fetching cryptocurrency data.

## Installation

To install `upoliop`, you can use npm:

```
npm install upoliop
```

## Usage

```javascript
const getCryptoData = require('upoliop');

// Example usage:
(async () => {
  const bitcoinData = await getCryptoData('bitcoin');
  console.log(bitcoinData);
})();
```

## API

### `getCryptoData(coin)`

- `coin` (string): The symbol of the cryptocurrency you want to fetch data for (e.g., 'bitcoin', 'ethereum').

Returns an object containing information about the specified cryptocurrency, including its name, symbol, current price, market cap, and total volume.

## Dependencies

- [axios](https://www.npmjs.com/package/axios): Promise-based HTTP client for Node.js and browsers.
- [lodash](https://www.npmjs.com/package/lodash): A modern JavaScript utility library delivering modularity, performance & extras.
- [moment](https://www.npmjs.com/package/moment): Parse, validate, manipulate, and display dates and times in JavaScript.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
