import './App.css';
import {useEffect} from "react";
import Nav from './Components/Nav'
import Container from './Components/Container';
import Carrosello from './Components/Carrosello';
import CustomCard from './Components/CustomCard';
import CustomFooter from './Components/Footer';
import ReactGA from 'react-ga';



function App() {
  /*useEffect(() => {
    document.getElementsByTagName('html')[0].classList.add('dark');
  }, []);*/

    ReactGA.pageview(window.location.pathname + window.location.search);


    return (
      <Container>
          <Nav/>
          <Carrosello/>

          <h1 id={'prodotti_anchor'}
              className={'mt-16 sm:mt-20 text-center font-bold text-[#364053] text-[30px] sm:text-[40px] font-montserrat font-semibold'}>I
              nostri prodotti</h1>
          <CustomCard/>

          <CustomFooter/>

          <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>
      </Container>
  );
}

export default App;
