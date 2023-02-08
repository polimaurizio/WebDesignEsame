import './App.css';
import {useEffect} from "react";
import Nav from './Components/Nav'
import Container from "./Components/Container";

function App() {
  /*useEffect(() => {
    document.getElementsByTagName('html')[0].classList.add('dark');
  }, []);*/
  return (
      <Container>
        <Nav/>
        <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>
      </Container>
  );
}

export default App;
