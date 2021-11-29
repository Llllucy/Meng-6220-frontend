import React, { useEffect, useState } from 'react';

export default function PostRequest({userId, userName, gender}) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
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
    })
}
