// API KEY = https://fakestoreapi.com/products

import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = "https://fakestoreapi.com/products"

interface productProps {
  id?: string;
  title?: string;

}

export default function App() {
  const [products, setProducts] = useState<productProps[]>([])
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [isFetchSuccess, setIsFetchSuccess] = useState<boolean>(false);

  const handleFetchData = async () => {
    try {
      const result = await axios.get(API_KEY);
      setProducts(result.data)
      setIsFetchSuccess(true);

    } catch (e) {
      setIsloading(false);

    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    handleFetchData();
    
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
          <> 
            Fetch finished!
            <br></br>
            
            {isFetchSuccess ? (
              <>
                fetch success!
                {products.map(product => (
                  <p>{product.title}</p>
                ))}
              </>
            ) : (
                <>
                  fetch failed
                </>
            )}
          </>
      )}
    </>
  )
};