import { useState } from 'react';
import './App.css';

function App() {
  const [tulostus, setTulostus] = useState();
  const [pituus, setPituus] = useState();
  const [paino, setPaino] = useState();
  const [vari, setVari] = useState();

  const laskePainoindeksi = () => {
    let pituusMetreina = pituus / 100;
    let painoindeksi = paino / pituusMetreina / pituusMetreina;
    painoindeksi = painoindeksi.toFixed(2);

    let teksti = "";
    if (painoindeksi < 15) {teksti = "sairaalloinen alipaino"; setVari("sairaalloinenPaino");
    } else if (painoindeksi >= 15 && painoindeksi < 17) {teksti = "merkittävä alipaino"; setVari("merkittavaPaino"); 
    } else if (painoindeksi >= 17 && painoindeksi < 18.5) {teksti = "normaalia alhaisempi paino"; setVari("lievaPaino");
    } else if (painoindeksi >= 18.5 && painoindeksi < 25) {teksti = "normaali paino"; setVari("normaaliPaino");
    } else if (painoindeksi >= 25 && painoindeksi < 30) {teksti = "lievä ylipaino"; setVari("lievaPaino");
    } else if (painoindeksi >= 30 && painoindeksi < 35) {teksti = "merkittävä ylipaino"; setVari("merkittavaPaino");
    } else if (painoindeksi >= 35 && painoindeksi <= 40) {teksti = "vaikea ylipaino"; setVari("sairaalloinenPaino");
    } else if (painoindeksi > 40) {teksti = "sairaalloinen ylipaino"; setVari("sairaalloinenPaino");}

    setTulostus(`Painoindeksi on: ${painoindeksi}, ${teksti}.`);
  }

  return (
    <div>
      <h1>Painoindeksilaskuri</h1>
      <input 
        type="text" 
        placeholder="Syötä pituutesi (cm)" 
        onChange={ (e) => { 
                            setPituus(e.target.value)
                          }
                  }>
      </input>
      <br></br>
      <input 
        type="text" 
        placeholder="Syötä painosi (kg)" 
        onChange = { (e) => { 
                              setPaino(e.target.value)
                            }
                    }>
      </input>
      <br></br>
      <button onClick={laskePainoindeksi}>Laske painoindeksi</button>
      
      <div className={vari}>
        {tulostus}
      </div>
      
    </div>
  );
}

export default App;
