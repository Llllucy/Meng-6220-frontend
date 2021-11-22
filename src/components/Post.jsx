import React from 'react';

class PostRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: userId,
            userName: userName,
            gender:gender
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
        fetch('http://localhost:8002/user/updateUser?userId=4704239730&userName=Shuran Wen&gender=0', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ userId: data.userId, userName: data.userName, gender:data.gender }));
    }
}

export default { PostRequest }; 