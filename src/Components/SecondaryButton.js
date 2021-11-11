import React from 'react'
import styled from 'styled-components'
import arrow from '../img/arrow.svg';

function SecondaryButton({name}) {
    return (
        <SecondaryButtonStyled>
            {name}
            <img src={arrow} alt="arrow" />
        </SecondaryButtonStyled>
    )
}

const SecondaryButtonStyled = styled.button`
    background-color: var(--dark-primary);
    padding: .7rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border: none;
    outline: none;
    border-radius: 20px;
    cursor: pointer; 
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        padding-left: .9rem;
    }
`;
export default SecondaryButton
