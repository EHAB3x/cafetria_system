import { useState } from 'react';
import axios from 'axios';

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (url, method = 'get', data = null) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios[method](url, data);
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(error.message);
      throw error;
    }
  };

  return { loading, error, sendRequest };
};

export default useApi;
