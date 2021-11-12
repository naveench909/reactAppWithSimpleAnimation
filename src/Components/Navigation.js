import React from 'react'
import styled from 'styled-components'
import PrimaryButton from './PrimaryButton';
import logo from '../img/logo.svg'

function Navigation() {
    return (
        <NavigationStyled>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Pricing</a></li>
            </ul>
            <PrimaryButton name={'Sign Up'} />
        </NavigationStyled>
    )  
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 10vh;
    /* background-color: white; */

    ul{
        display: flex;
        justify-content: space-between;
        width: 40%;
        @media screen and (max-width:800px){
            width: 50%;
        }
        @media screen and (max-width:700px){
            display: none;
        }
    }
    
    
`;

export default Navigation
