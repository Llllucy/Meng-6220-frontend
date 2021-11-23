import React, { useEffect, useState } from 'react';

export default function GetRequest(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const id = props.id;
  const lat = props.lat;
  const lgt = props.lgt;
  const cid = props.cid;
  useEffect(() => {
    fetch('http://localhost:8002/recommend/getRecommend?userId='+id+'&latitude='+lat+'&longitude='+lgt+'&cityId='+cid)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div class="restaurantPage">
                <div><h1>Restaurants Recommendation Page</h1>
                    <ul class="list-group">
                      <li class="list-group-item">items[0]</li>
                      <li class="list-group-item">items[1]</li>
                      <li class="list-group-item">items[2]</li>
                    </ul>
                </div>
            </div>
    );
  }
}

