import React from 'react';

class GetRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item0: null,
            item1: null,
            item2: null
        };
    }

    componentDidMount() {
        fetch('http://localhost:8002/recommend/getRecommend?userId=4704239730&latitude=1.0&longitude=2.0&cityId=1')
            .then(response => response.json())
            .then(data => this.setState({ item0: data[0],item1: data[1],item2: data[2] }));
    }

    render() {
    const { error, isLoaded, item0,item1,item2 } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
            <div class="restaurantPage">
                <div><h1>Restaurants Recommendation Page</h1>
                    <ul class="list-group">
                      <li class="list-group-item">item0</li>
                      <li class="list-group-item">item1</li>
                      <li class="list-group-item">item2</li>
                    </ul>
                </div>
            </div>
        );
    }
  }
}

export default{ GetRequest }; 