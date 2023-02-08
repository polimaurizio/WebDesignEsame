import './App.css';
import Container from "./Components/Container";
import {useEffect} from "react";
import Card from "./Components/Card";
import Nav from './Components/Nav'

function App() {
    /*useEffect(()=>{
        document.getElementsByTagName('html')[0].classList.add('dark');
    }, []);*/

  return (
    <div>

      <Nav />

        {/*<Container className={'place-items-center h-screen'}>
          <div className={'items-center justify-center flex h-screen'}>
              <Card />
          </div>
        </Container>*/}
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </div>
  );
}

export default App;
