import { useState, useEffect } from "react";
import Axios from "axios";
import CoinDetails from "./coindetails";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { FaCaretDown,FaCaretUp } from "react-icons/fa";


const CryptoTable = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [tableRes, setTableRes] = useState<any>();
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    getApi();
  }, []);
  const getApi = async (page?: string) => {
    if (page == "next") {
      setPageNumber(pageNumber + 1);
    } else if (page == "previous") {
      setPageNumber(pageNumber - 1);
    }

    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "10",
        offset: pageNumber,
      },
      headers: {
        "X-RapidAPI-Key": "3bda22587fmsh7b69f27a49a8fc0p13a180jsnd9db4978a6e8",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };
    setLoader(true);
    let res = await Axios.request(options);
    setTableRes(res);
    setLoader(false);
    console.log(res);
  };

 function changeValue (data:any){
    if(data.includes('-')){
      return <div style={{color:'red'}} ><FaCaretDown style={{color:"red"}}/>{data}
      </div>
    }else{
      return <div style={{color:'green'}}> <FaCaretUp style={{color:"green"}}/> {data}</div>
    }
  }

  return (
    <>
      {/* <button onClick={() => getApi()}>Price Listing</button> */}
      
      {loader ? (
        <div className="container">
          <PulseLoader className="loader">
            {/* <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden"></span>
              </div>
            </div> */}
          </PulseLoader>

        </div>
      ) : (
        
        <table className="tableBorder">
          <thead>
            <tr>
              <th className="tableHeader">Symbol</th>
              <th className="tableHeader">Name</th>
              <th className="tableHeader">Price(USD)</th>
              <th className="tableHeader">Changes(%)</th>
            </tr>
          </thead>
          <tbody>
            {tableRes?.data.data.coins.map((i: any) => {
              return (
                <tr>
                  <td className="tablebody">
                    <Link to={{ pathname: "/details" }} state={i}>
                      {i.symbol}
                    </Link>
                  </td>
                  <td className="tablebody">{i.name}</td>
                  <td className="tablebody">{i.price}</td>
                  <td className="tablebody">{changeValue(i.change)}</td>
                </tr>
              );
            })}
          </tbody>
          <span>
            {pageNumber !== 0 ? (
              <button
                className="btn btn-secondary"
                onClick={() => getApi("previous")}
              >
                Previous
              </button>
            ) : null}
          </span>

          <button className="btn btn-secondary" onClick={() => getApi("next")}>
            Next
          </button>
        </table>
      )}
      {/* <table className="tableBorder">
        <thead>
          <tr>
            <th className="tableHeader">Symbol</th>
            <th className="tableHeader">Name</th>
            <th className="tableHeader">Price(USD)</th>
            <th className="tableHeader">Changes(%)</th>
          </tr>
        </thead>
        <tbody>
          {tableRes?.data.data.coins.map((i: any) => {
            return (
              <tr>
                <td className="tablebody">
                  <Link to={{ pathname: "/details" }} state={i}>
                    {i.symbol}
                  </Link>
                </td>
                <td className="tablebody">{i.name}</td>
                <td className="tablebody">{i.price}</td>
                <td className="tablebody">{i.change}</td>
              </tr>
            );
          })}
        </tbody>
        <span>
          {pageNumber !== 0 ? (
            <button
              className="btn btn-secondary"
              onClick={() => getApi("previous")}
            >
              Previous
            </button>
          ) : null}
        </span>

        <button className="btn btn-secondary" onClick={() => getApi("next")}>
          Next
        </button>
      </table> */}
    </>
  );
};

export default CryptoTable;
