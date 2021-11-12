import React from 'react'
import styled from 'styled-components';
import SecondaryButton from './SecondaryButton';
import phone from '../img/phone.svg'
import ring1 from '../img/ring_orange.svg';
import message1 from '../img/message_pink.svg';
import message2 from '../img/message_blue.svg';

function HeaderContent() {
    return (
        <HeaderContentStyled>
            <div className="left-content">
                <div className="left-text-container">
                    <h1>Samrt banking for freelancers</h1>
                    <p className="white">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum minima odit molestias necessitatibus corrupti quam inventore repellendus corporis tempore perspiciatis incidunt, id deserunt vel voluptatum eveniet placeat natus cumque facilis.
                    </p>
                    <SecondaryButton name={'Register Now'} />
                </div>
            </div>

            <div className="right-content">
                <img src={phone} alt="phone" className="phone" />
                <img src={ring1} alt="ring1" className="ring1" />
                <img src={message1} alt="message1" className="message1" />
                <img src={message2} alt="message2" className="message2" />
            </div>
            
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2 , 1fr);
    padding-top: 3rem;
    @media screen and (max-width:820px){
        grid-template-columns: 1fr .1fr
    }

    .left-content{
        display: flex;
        align-items: center;
        padding-right: 3rem;
        @media screen and (max-width:820px){
            padding-right: 0rem;
        }
        h1{
            font-size: 4rem;
            font-weight: 600;
        }
        .white{
            color: white;
            padding: 1.4rem 0;
            line-height: 1.8rem;
        }
    }

    .right-content{
        position: relative;
        display: flex;
        justify-content: center;
        @media screen and (max-width:820px){
            display: none;
        }
        .phone{
            width: 80%;
        }
        .ring1{
            position: absolute;
            bottom: 20%;
            right: 0;
            left: auto;
            animation: move2 15s infinite;
            transition: all .4s ease-in-out;
        }
        .message1{
            position: absolute;
            top: 0;
            right: 0;
            left: auto;
            animation: move 3s infinite;
            transition: all .4s ease-in-out;
        }
        .message2{
            position: absolute;
            bottom: 25%;
            left: 0; 
            animation: move 3s infinite;
            transition: all .4s ease-in-out;
        }
    }

    // Header Animations 

    .message1{
        @keyframes move{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }

            50%{
                transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
            }

            100%{
                transform: translateY(0) rotate(0deg) scale(1) translateX(0);
            }
        }

        @keyframes move2{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }

            50%{
                transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
            }

            100%{
                transform: translateY(0) rotate(0deg) scale(1) translateX(0);
            }
        }
    }

    @media screen and (max-width:1200px){
        /* grid-template-columns: .8fr 1.2fr; */
        .left-text-container{
            h1{
                font-size:2rem;
                font-weight: 400;
            }
        }

    }


`;

export default HeaderContent
