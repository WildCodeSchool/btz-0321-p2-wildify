import { useEffect, useState } from 'react';
import axios from 'axios';

function api() {
  const [isLoading, setIsLoading] = useState(true);
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = () => {
      setIsLoading(true);
      setError(null);

      axios
        .get('https://bazify-backend.basile.vernouillet.dev/api/v1/songs')
        .then((result) => {
          setSongs(result);
        })
        .catch((err) => {
          setError(err.response);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    getData();
  }, []);

  return { isLoading, error };
}

export default api;
