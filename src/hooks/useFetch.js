import { useEffect, useState } from "react";

function useFetch(url) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  useEffect(() => {
    let abortController = new AbortController();
    let signal = abortController.signal;
    fetch(url, {
      signal,
    })
      .then((res) => {
        setLoading(true);
        if (!res.ok) {
          throw Error("something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });

    // cleanup function
    return () => {
      abortController.abort();
    };
  }, [url]);
  return { data, loading, error };
}

export default useFetch;
