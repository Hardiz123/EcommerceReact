import React, { useEffect } from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';
// import react-tostify
import { HomePageContainer } from './homepage.styles';


const HomePage = () => {

  useEffect(() => {
   
  }, []);

return (
  
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
)
};

export default HomePage;
