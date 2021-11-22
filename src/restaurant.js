import React, { Component } from 'react';
import {useParams} from 'react-router-dom';
import GetRequest from "./components/Get";

export default function Restaurants() {

    const {lat, lng} = useParams(); 

    return (
      <GetRequest />
      )
}