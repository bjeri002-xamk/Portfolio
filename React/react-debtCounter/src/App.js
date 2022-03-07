import { useState } from 'react';
import './App.css';

function App() {

const [velat, setVelka] = useState([]);
const [saatavat, setSaatava] = useState([]);

const [velkojanNimi, setVelkojanNimi] = useState();
const [velkaSumma, setVelkaSumma] = useState();
const [total, setTotal] = useState(0);

const [sattavanNimi, setSaatavanNimi] = useState();
const [saatavaSumma, setSaatavaSumma] = useState();
const [totalSaatava, setTotalSaatava] = useState(0);

const lisaaVelka =() => {
  
  let uusiVelkaApu = {
    nimi: velkojanNimi,
    summa: velkaSumma
  }
  setVelka([...velat, uusiVelkaApu]);
  
}

const poistaVelka = (indeksi) => {
  let velatApu = [...velat];
  let uusiSumma = total - velatApu[indeksi].summa;
  setTotal(uusiSumma);
  velatApu.splice(indeksi, 1);
  setVelka([...velatApu]);
  
}

const lisaaSaatava = () => {
  let uusiSaatavaApu = {
    nimi: sattavanNimi,
    summa: saatavaSumma
  }
  setSaatava([...saatavat, uusiSaatavaApu]);
}

const poistaSaatava = (indeksi) => {
  let saatavaApu = [...saatavat];
  let uusiSumma = totalSaatava - saatavaApu[indeksi].summa;
  setTotalSaatava(uusiSumma);
  saatavaApu.splice(indeksi, 1);
  setSaatava([...saatavaApu]);
}


return(
  <div>
    <h1>Vippikirjanpito</h1>
    <h2>Velat</h2>

    <table>
      <thead>
        <tr>
          <th>Kenelle</th>
          <th>Summa</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Kenelle..."
              id="kenelle"
              onChange = { (e) => {
                                    setVelkojanNimi(e.target.value);
                                  }
                          }>
            </input>
          </td>
          <td>
            <input
              type="text"
              id="velkamaara"
              placeholder="Summa"
              onChange = { (e) => {
                                    setVelkaSumma(parseInt(e.target.value));
                                  }
                          }>
            </input>
          </td>
          <td>
            <button 
              onClick={ () => {
                lisaaVelka();
                let summa = total + parseInt(document.getElementById("velkamaara").value);
                setTotal(parseInt(summa)); 
                document.getElementById("kenelle").value = "";
                document.getElementById("velkamaara").value = "";
              }  }
              
            >Lisää velka</button>
          </td>
        </tr>
        {velat.map( (velka,idx) => {
          return(
            <tr key={idx}>
              <td key={idx}>{velka.nimi}</td>
              <td>{velka.summa}</td>
              <td><button
              onClick = {() => {
                poistaVelka(idx);
              }}>Poista</button></td>
              </tr>
          );
        })}
      </tbody>
    </table>
    
    <p>{total === 0
      ? "Velkasi on 0 euroa."
      
      : "Velkasi on yhteensä " + total + " euroa."}
    </p>

      <h2>Saatavat</h2>

    <table>
      <thead>
        <tr>
          <th>Keneltä</th>
          <th>Summa</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Keneltä..."
              id="kenelta"
              onChange = { (e) => {
                                    setSaatavanNimi(e.target.value);
                                  }
                          }>
            </input>
          </td>
          <td>
            <input
              type="text"
              id="saatavamaara"
              placeholder="Summa"
              onChange = { (e) => {
                                    setSaatavaSumma(parseInt(e.target.value));
                                  }
                          }>
            </input>
          </td>
          <td>
            <button 
              onClick={ () => {
                lisaaSaatava();
                let summa = totalSaatava + parseInt(document.getElementById("saatavamaara").value);
                setTotalSaatava(parseInt(summa)); 
                document.getElementById("kenelta").value = "";
                document.getElementById("saatavamaara").value = "";
              }  }
              
            >Lisää velka</button>
          </td>
        </tr>
        {saatavat.map( (saatava,idx) => {
          return(
            <tr key={idx}>
              <td key={idx}>{saatava.nimi}</td>
              <td>{saatava.summa}</td>
              <td><button
                onClick= { () => {
                  poistaSaatava(idx);
                }}
              >Poista</button></td>
              </tr>
          );
        })}
      </tbody>
    </table>
    
    <p>
    {totalSaatava === 0
      ? "Saatavasi on 0 euroa."
      
      : "Saatavasi on yhteensä " + totalSaatava + " euroa."}
    </p>

  </div>

);
}

export default App;