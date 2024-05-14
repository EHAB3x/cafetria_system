import { useState } from 'react';
import axios from 'axios';

const useFetchData = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Accept: 'application/json',
          Lang: 'ar',
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYmFja2VuZC5zbWFydHZpc2lvbjRwLmNvbVwvZGV6aW5cL3B1YmxpY1wvYXBpXC91c2VyXC9sb2dpbiIsImlhdCI6MTcwMDQ3ODMxMiwibmJmIjoxNzAwNDc4MzEyLCJqdGkiOiIzd2lleHh1SUtDc1NsNnNEIiwic3ViIjoxNTAsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.b4tKlFH-38Lzhpis_w7xykq4aVhK6r0GEnvgJUFna6w',
        },
      });
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, fetchData };
};

export default useFetchData;
