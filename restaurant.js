import React, { Component } from 'react';

class Restaurants extends Component {
    render() {
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
                  <td class="align-middle">Restaurant #192</td>
                </tr>
                <tr class="table-warning">
                  <th scope="row"> </th>
                  <td class="align-middle">2</td>
                  <td class="align-middle">Restaurant #76</td>
                </tr>
                <tr class="table-warning">
                  <th scope="row"> </th>
                  <td class="align-middle">3</td>
                  <td class="align-middle">Restaurant #243</td>
                </tr>
              </tbody>
            </table>
            </div>
            </div>
        );
    }
}

export default Restaurants; 
