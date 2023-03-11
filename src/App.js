import './App.css';
import Nav from './Components/Nav'
import Container from './Components/Container';
import Carrosello from './Components/Carrosello';
import CustomCard from './Components/CustomCard';
import CustomFooter from './Components/Footer';
import CustomHorizontalCard from "./Components/CustomHorizontalCard";
import CustomButton from "./Components/CustomButton";
import React from "react";
import Gallery from "./Components/Gallery";
import useScrollPosition from "./useScrollPosition";


function App() {
    const scrollPosition = useScrollPosition();

    console.log(scrollPosition);

    return (
        <Container className={'select-none'}>
            <Nav/>
            <Carrosello/>


            {/* Sezione LA NOSTRA STORIA */}
            <a id={'storia_anchor'}></a>
            <h1 
                className={'mt-16 sm:mt-20 text-center font-bold text-[#2B2B2B] text-[30px] sm:text-[40px] font-montserrat'}>
                La nostra storia
            </h1>

            <CustomHorizontalCard/>
            <CustomButton>
                Scopri di più
            </CustomButton>

            {/* Sezione I NOSTRI PRODOTTI */}
            <Gallery/>


            {/* Sezione I NOSTRI PRODOTTI */}
            <a id={'prodotti_anchor'}></a>
            <h1 
                className={'mt-30 sm:mt-28 text-center font-bold text-[#2B2B2B] text-[30px] sm:text-[40px] font-montserrat'}>I
                nostri prodotti
            </h1>
            <CustomCard/>
            <CustomButton>Scopri di più</CustomButton>



          {/* FOOTER */}
          <CustomFooter/>

          <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>
      </Container>
  );
}

export default App;
