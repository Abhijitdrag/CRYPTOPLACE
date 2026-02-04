import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {

    const [allCoin,setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        Symbol: "$" 
    });

    const fetchAllCoin = async () => {
        const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-M3Zf8nNXodJobsbD1kFiSJDF'}};

fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h`, options)
  .then(res => res.json())
  .then(res => setAllCoin(res))
  .catch(err => console.error(err));
    }

useEffect(()=>{
    fetchAllCoin();
}, [currency])

    const contextValue = {
        allCoin, currency, setCurrency
    } 

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;