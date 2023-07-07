import React from "react";

const CoinDetails = () => {
  return (
    <>
      <h4>Details</h4>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>price</th>
            <th>market cap</th>
            <th>change</th>
            <th>Rank</th>
            <th>24 hr volume</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BTC</td>
            <td>Bitcoin</td>
            <td>27000.34</td>
            <td>530,916,053,785</td>
            <td>-1.00</td>
            <td>1</td>
            <td>16,114,915,103</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CoinDetails;
