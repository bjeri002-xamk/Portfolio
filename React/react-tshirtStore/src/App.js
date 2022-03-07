
import {useState} from 'react';
import Header from './components/Header';
import Sivu from './components/Sivu';
import Footer from './components/Footer';
import Tuotenostot from './components/Tuotenostot';
import Kirjautuminen from './components/Kirjautuminen';
import Pikaostoskori from './components/Pikaostoskori';
import Oikeapuoli from './components/Oikeapuoli';
import Tpaita from './components/Tpaita';



function App() {
  
  const [summa, setSumma] = useState(0);
  const [paidatLkm, setPaidatLkm] = useState(0);
  const [kirjaudu, setKirjaudu] = useState(false);

  const tarkistaKirjautuminen = (saatuTunnus,saatuSalasana) => {
    if (saatuTunnus === "testi" && saatuSalasana === "testi") {
      setKirjaudu(true);
    }else {
      setKirjaudu(false);
    }
  }
  
  const lisaaPaidatLkm = (hinta) => {
    setPaidatLkm(paidatLkm+1);
    setSumma(summa + hinta);
  } 

  return (
    <Sivu>
      
      <Header></Header>
      
      <Tuotenostot>
        
        <Tpaita 
          lisaaPaidatLkm={lisaaPaidatLkm}
          kirjaudu = {kirjaudu}>
        </Tpaita>
      
      </Tuotenostot>

      <Oikeapuoli>

      <Kirjautuminen
        tarkistaKirjautuminen={tarkistaKirjautuminen}
        kirjaudu = {kirjaudu}>
      </Kirjautuminen>
      
      <Pikaostoskori 
        paidatLkm = {paidatLkm}
        summa={summa}
        kirjaudu = {kirjaudu}>
      </Pikaostoskori>

      </Oikeapuoli>

      <Footer> 
      </Footer>
    </Sivu>
  );
}

export default App;
