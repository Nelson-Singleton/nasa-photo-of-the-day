import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Header from './header.js';
import styled from 'styled-components'

const Container = (props) => {
const {nasaData, setHeader} = props;

const StyledDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 5%;
`;
const StyledP = styled.p`
text-align: center;
width: 50%;
justify-content: center;
background-color: black;
color: white;
`;
 

    return (
        <StyledDiv>
            <img src = {nasaData.url} ></img> 
            
            <StyledP>
            
                {nasaData.explanation}
                
            </StyledP>
            
            <h2>
                
            </h2>

        </StyledDiv>


    );


};

export default Container;