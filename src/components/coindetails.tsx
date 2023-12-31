import React from "react";
import {Link,useLocation} from "react-router-dom"
import { FaCaretDown,FaCaretUp } from "react-icons/fa";

const CoinDetails = () => {
  const location = useLocation();
  const coinDetails = location.state;
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
      <h4>Details</h4>
      <div className="maincontainer">
        <table className="tableDetail">
        <thead className="tablehead">
          <tr>
            <th className="tablehead">Symbol</th>
            <th className="tablehead">Name</th>
            <th className="tablehead">price</th>
            <th className="tablehead">market cap</th>
            <th className="tablehead">change</th>
            <th className="tablehead">Rank</th>
            <th className="tablehead">24 hr volume</th>
          </tr>
        </thead>
        <tbody className="tablebody1">
          <tr >
            <td className="tablebody1">{coinDetails.symbol}</td>
            <td className="tablebody1">{coinDetails.name}</td>
            <td className="tablebody1">{coinDetails.price}</td>
            <td className="tablebody1">{coinDetails.marketCap}</td>
            <td className="tablebody1">{changeValue(coinDetails.change)}</td>
            <td className="tablebody1">{coinDetails.rank}</td>
            <td className="tablebody1">{coinDetails['24hVolume']}</td>
          </tr>
        </tbody>
      </table>
      </div>
      
    </>
  );
};

export default CoinDetails;
