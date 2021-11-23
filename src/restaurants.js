import React, { Component } from 'react';
import {useParams} from 'react-router-dom';
import GetRequest from "./components/Get2";

export default function Restaurants() {

    const {lat, lng} = useParams(); 
    const modifiedLat =(lat-30)/20*4-2.0;
    const modifiedLgn =-1*(lng+80)/40*0.7+0.3


    return ( 
      <GetRequest id={4704239730} lat={modifiedLat} lng={modifiedLgn} cid={1} />
      )
}