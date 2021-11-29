import React, { useEffect, useState } from 'react';

export default function GetRequest({id, lat, lng, cid}) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  console.log(lat)
  console.log(lng)
 
  useEffect(() => {
    fetch('http://localhost:8002/recommend/getRecommend?userId='+id+'&latitude='+lat+'&longitude='+lng+'&cityId='+cid)
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
      <div className="restaurantPage">
                <div><h1>Restaurants Recommendation Page</h1>
                    <ul className="list-group">
                      <li className="list-group-item">items[0]</li>
                      <li className="list-group-item">items[1]</li>
                      <li className="list-group-item">items[2]</li>
                    </ul>
                </div>
            </div>
    );
  }
}

