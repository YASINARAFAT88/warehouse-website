import { useEffect, useState } from "react";

const useInventory = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setStocks(data))
  }, [])
  return [stocks, setStocks]
}
export default useInventory;