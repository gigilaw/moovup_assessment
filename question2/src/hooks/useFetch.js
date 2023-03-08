import { useEffect, useState } from 'react';

const useFetch = (url, headers) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch(url, { headers }, { signal: abortCont.signal });
        if (!res.ok) {
          throw Error('Could not fetch data');
        }

        const data = await res.json();
        setData(data);
        setIsLoading(false);
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.warn('fetch aborted');
        } else {
          setIsLoading(false);
          setError(err.message);
          console.warn(err.message);
        }
      }
    };
    fetchData();
    return () => abortCont.abort();
  }, [url, headers]);

  return { data, isLoading, error };
};

export default useFetch;
