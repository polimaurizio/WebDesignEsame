import './App.css';
import Container from "./Components/Container";
import Card from "./Components/Card"
import {useEffect} from "react";

function App() {
    useEffect(()=>{
        document.getElementsByTagName('html')[0].classList.add('dark');
    }, []);

  return (
      <Container className={'place-items-center h-screen'}>
          <div className={'items-center justify-center flex h-screen'}>
            <Card />
          </div>
      </Container>
  );
}

export default App;
