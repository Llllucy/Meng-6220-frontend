import React from 'react';

class PostRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: props.userId,
            userName: props.userName,
            gender:props.gender
        };
    }

    componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: userId,
            userName: userName,
            gender:gender})
        };
        fetch('http://localhost:8002/user/updateUser?userId='+this.userId+'&userName='+this.userName+'&gender='+this.gender, requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ userId: data.userId, userName: data.userName, gender:data.gender }));
    }
}

export default { PostRequest }; 