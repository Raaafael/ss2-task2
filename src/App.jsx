// API KEY = https://fakestoreapi.com/products

import axios from "axios";
import { useState, useEffect } from "react"

const API_KEY = "https://fakestoreapi.com/products"

export default function App() {
  const [users, setUsers] = useState([])

  const handleFetchData = async () => {
    try {
      const result = await axios.get(API_KEY);
      setUsers(result.data)

    } catch (e) {

    };
  };

  useEffect(() => {
    handleFetchData();
    
  }, []);

  return (
    <>
      {
        users?.map(user => (
          <p>{user.id}. {user.title}</p>
        ))
      }
    </>
  )
};