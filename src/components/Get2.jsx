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
      <div class="restaurantPage bg-warning bg-opacity-50 p-5" >
            <h1 class="text-center">Restaurants Recommendation Page</h1>
            <div class="row col-md-10 p-5 m-5">
            <table class="table center table-warning table-hover text-center ">
              <thead>
                <tr class="table-warning">
                  <th scope="col"> </th>
                  <th scope="col">#</th>
                  <th scope="col">Restaurant Results</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-warning">
                  <th scope="row"> </th>
                  <td class="align-middle">1</td>
                  <td class="align-middle">Restaurant item[0]</td>
                </tr>
                <tr class="table-warning">
                  <th scope="row"> </th>
                  <td class="align-middle">2</td>
                  <td class="align-middle">Restaurant item[1]</td>
                </tr>
                <tr class="table-warning">
                  <th scope="row"> </th>
                  <td class="align-middle">3</td>
                  <td class="align-middle">Restaurant item[2]</td>
                </tr>
              </tbody>
            </table>
            </div>
            </div>
    );
  }
}

