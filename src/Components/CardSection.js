import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../Styles/Layouts';
import card from '../img/creditcard.svg'
function CardSection() {
    return (
        <CardSectionStyled>
            <InnerLayout>
                <div className="card-container">
                <div className='card-left'>
                    <h2 className='secondary-heading'>
                        One card for all Payments
                    </h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, aperiam recusandae corrupti repellat magni iusto ipsam optio reprehenderit voluptatibus qui dicta accusantium tempore vitae voluptas?
                    </p>
                </div>
                <div className='card-right'>
                    <img src={card} alt="creditcard" />
                </div>
                </div>
            </InnerLayout>
        </CardSectionStyled>
    )  
}

const CardSectionStyled = styled.section`
    .card-container{
        height: 300px;
        display: grid;
        grid-template-columns: 1fr 1.3fr;
    }

    .card-right{
        display: flex;
        justify-content: flex-end;
    }
    .card-left{
        p{
            padding: 1rem 0;
        }
    }
`;

export default CardSection;
