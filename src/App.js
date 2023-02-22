import './App.css';
import Nav from './Components/Nav'
import Container from './Components/Container';
import Carrosello from './Components/Carrosello';
import CustomCard from './Components/CustomCard';
import CustomFooter from './Components/Footer';
import CustomHorizontalCard from "./Components/CustomHorizontalCard";



function App() {
  /*useEffect(() => {
    document.getElementsByTagName('html')[0].classList.add('dark');
  }, []);*/


    return (
      <Container className={'select-none'}>
          <Nav/>
          <Carrosello/>


          {/* Sezione LA NOSTRA STORIA */}
          <h1 id={'storia_anchor'}
              className={'mt-16 sm:mt-20 text-center font-bold text-[#364053] text-[30px] sm:text-[40px] font-montserrat font-semibold'}>
              La nostra storia</h1>

          <CustomHorizontalCard />


          {/* Sezione I NOSTRI PRODOTTI */}
          <h1 id={'prodotti_anchor'}
              className={'mt-16 sm:mt-24 text-center font-bold text-[#364053] text-[30px] sm:text-[40px] font-montserrat font-semibold'}>I
              nostri prodotti</h1>
          <CustomCard/>


          {/* FOOTER */}
          <CustomFooter/>

          <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>
      </Container>
  );
}

export default App;
