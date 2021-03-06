import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../Styles/Layouts';
import ChartStats from './ChartStats';
import chart from '../img/chart.svg';
import AnimatedButton from './AnimatedButton';
import { Fade } from 'react-reveal';
import { Roll, Bounce } from 'react-reveal';
function ChartSection() {
    return (
        <ChartStyled >
            <InnerLayout>
                <div className="chart-con">
                    <Fade left>
                    <div className="chart-left">
                        <div className="stats">
                            <div className="stats-money">
                                <ChartStats name={'Balance'} amount={'$250'} />
                                <ChartStats name={'Last Transaction'} amount={'$1,000'} />
                            </div>
                            <img src={chart} alt="" />
                        </div>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="chart-right">
                        <h2 className="secondary-heading">
                            Manage your finances like a pro in no time 
                        </h2>
                        <Roll right>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officia nemo distinctio dolores necessitatibus odit magni corrupti error, 
                            voluptate alias adipisci ducimus nostrum maiores. Ad?
                        </p>
                        </Roll>
                        <Bounce bottom>
                            <AnimatedButton name={'Learn More'} />
                        </Bounce>
                    </div>
                    </Fade>
                </div>
            </InnerLayout>
        </ChartStyled >
    )
}

const ChartStyled = styled.section`
    .chart-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 920px){
            grid-template-columns: repeat(1, 1fr);
        }
        @media screen and (max-width:777px){
            padding-top: 1.9rem;
        }
        @media screen and (max-width:772px){
            padding-top: 8rem;
        }
        .chart-left{
            width: 80%;
                @media screen and (max-width: 1500px){
                    width: 100%;
                }
                
            .stats{
                img{
                    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                    border-radius: 62px;
                    width: 100%;
                }
                .stats-money{
                    display: flex;
                    padding-bottom: 1.3rem;
                    justify-content: space-between;
                }
            }
        }

        .chart-right{
            padding-left: 2rem;
            p{
                padding: 1.3rem 0;
            }
        }
    }
`;

export default ChartSection
