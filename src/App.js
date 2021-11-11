import React from 'react';
//components
import Header from './Components/Header';
import CardSection from './Components/CardSection';
import FAQSection from './Components/FAQSection';
import MessagingSection from './Components/MessagingSection'
import ChartSection from './Components/ChartSection'
import PaymentSection from './Components/PaymentSection'
import Footer from './Components/Footer';

//Animations
import { Fade } from 'react-reveal';

import { OuterLayout } from './Styles/Layouts';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          <Fade left>
            <CardSection />
          </Fade>  
          <Fade >
              <ChartSection />
            </Fade>
            <Fade left>
              <MessagingSection />
            </Fade>
            <Fade right>
              <PaymentSection />
            </Fade>
            <Fade left>
              <FAQSection />
            </Fade>
        </MainStyled>
      </OuterLayout>
      <Fade bottom>
        <Footer />
      </Fade>
    </div>
  );
}

const MainStyled = styled.main`

`; 

export default App;
