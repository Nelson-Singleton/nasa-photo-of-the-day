import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Header from './header.js';

const Container = (props) => {
    const {nasaData, setHeader} = props;

    return (
        <div>
            <h2>
                {nasaData.title}
            </h2>
            <img src = {nasaData.url} ></img> 
            
            <h3><p>
                {nasaData.explanation}
                </p>
            </h3>
            <h2>
                
            </h2>

        </div>


    );


};

export default Container;