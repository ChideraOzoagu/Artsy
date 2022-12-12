import { useState, useEffect } from "react";
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setImages(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    fetchData()
  },[url])
  return {loading, images}
};
