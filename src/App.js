import './App.css';
import Container from "./Components/Container";
import {useEffect} from "react";
import Card from "./Components/Card";
import Nav from './Components/Nav'
import Button from './Components/Button'

function App() {
    /*useEffect(()=>{
        document.getElementsByTagName('html')[0].classList.add('dark');
    }, []);*/
  return (
      <Nav />
  );
}

export default App;
