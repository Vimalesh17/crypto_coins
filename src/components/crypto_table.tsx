import { useState } from "react";
import Axios from "axios";
import CoinDetails from "./coindetails";
import {NavLink} from "react-router-dom";

const CryptoTable = () => {
  const [tableRes, setTableRes] = useState<any>();
  const getApi = async () => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "50",
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Key": "3bda22587fmsh7b69f27a49a8fc0p13a180jsnd9db4978a6e8",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };
    let res = await Axios.request(options);
    setTableRes(res);
    console.log(res);
  };

  return (
    <>
      <button onClick={() => getApi()}>Price Listing</button>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price(USD)</th>
            <th>Changes(%)</th>
          </tr>
        </thead>
        <tbody>
          {tableRes?.data.data.coins.map(
            (i: {
              symbol:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined;
              name:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined;
              price:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined;
              change:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined;
            }) => {
              return (
                <tr>
                  <td><NavLink to={"/details"}>{i.symbol}</NavLink></td>
                  <td>{i.name}</td>
                  <td>{i.price}</td>
                  <td>{i.change}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </>
  );
};

export default CryptoTable;
