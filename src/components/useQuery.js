import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const useQuery = ({ url }) => {
  const history = useHistory();
  const [apiData, setApiData] = useState();

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((apiData) => {
        if (apiData.cod === '404') {
          console.log('404 useQuery');
          history.replace(history.location.pathname, {
            errorStatusCode: apiData.cod,
          });
        } else {
          setApiData(apiData);
          console.log(apiData);
        }
      });
  }, [url]);

  return { weather: apiData };
};

export default useQuery;
