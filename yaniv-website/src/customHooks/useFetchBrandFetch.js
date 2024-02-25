import React, { useEffect, useState } from "react";

const useFetch = ({ url, auth = true }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDataFromUrl = async (url, auth) => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: auth
            ? "Bearer CR3AQMtwgbowaG9zdJaQ8WcYrNgH5Ftuapfffc7XxKk="
            : false,
        },
      };
      try {
        const response = await fetch(url, options);
        const dataJson = await response.json();
        setData(dataJson);
        setLoading(false);
      } catch (error) {
        setError("Error, ", error);
        setLoading(false);
      }
    };
    getDataFromUrl(url, auth);
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
