import { useEffect, useState } from "react";

const useInventory = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch('https://frozen-ravine-68631.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setStocks(data))
  }, [])
  return [stocks, setStocks]
}
export default useInventory;