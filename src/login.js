import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import MapPosition from "./map";
<<<<<<< HEAD
import PostRequest from "./components/Post";
=======
>>>>>>> 8c0c611a945801b66b033f3e3feaccd93dc0a9e3
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Router } from 'react-router';
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [userId, setID] = useState("");
  const [userName, setName] = useState("");
  const [gender, setGender] = useState("");

  //const history = useHistory();
  const navigate = useNavigate();

  function validateForm() {
    return userId.length > 0 && userName.length > 0 && gender.length ===1;
  }

  function handleSubmit(event) {
    event.preventDefault();
    <PostRequest />
    navigate('/map/', {state: userId});
  }

  return (
    <div className="Login">
      <Header />
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="userId">
          <Form.Label>User ID</Form.Label>
          <Form.Control
            autoFocus
            type="userId"
            value={userId}
            onChange={(e) => setID(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="userName">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            autoFocus
            type="userName"
            value={userName}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            autoFocus
            type="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
      <Footer />
    </div>
  );
}
