import React from 'react';
import Container from './maincontainer.js';
import styled from 'styled-components'

const Header = (props) => {
    const {nasaData, setHeader} = props;

    return (
        <div>
            <h1>
                Nasa Picture of the Day!
            </h1>
            <h2>
                {nasaData.copyright}
            </h2>
            <h2>
                {nasaData.date}
            </h2>
            <h2>
                {nasaData.title}
            </h2>

        </div>


    );


};

export default Header;