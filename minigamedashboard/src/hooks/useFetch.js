import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancel = false;

    async function getData() {
      try {
        const res = await axios.get(url);
        if (!cancel) setData(res.data);
      } catch (err) {
        if (!cancel) setError(err);
      } finally {
        if (!cancel) setLoading(false);
      }
    }

    getData();

    return () => { cancel = true; };
  }, [url]);

  return { data, loading, error };
}
