import { Tab, Tabs} from '@material-ui/core';
import { useEffect, useState } from 'react';
import Ennuste from './components/Ennuste';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import WeatherNyt from './components/WeatherNyt';
import { format, fromUnixTime } from "date-fns";


function App() {

  const [data, setData] = useState({});
  const [ennusteData, setEnnusteData] = useState([]);
  const [kaupunki, setKaupunki] = useState("mikkeli");
  const [virhe, setVirhe] = useState("");

  const haeTiedot = async () => {

    try {
      
      const yhteys = await fetch(`https://xamkbit.herokuapp.com/saatilanne/${kaupunki}`);
      const tiedot = await yhteys.json();
      const ennusteYhteys = await fetch(`https://xamkbit.herokuapp.com/saaennuste/${kaupunki}`);
      const ennusteTiedot = await ennusteYhteys.json();
      setVirhe("");

      if (tiedot.cod === "404") {
        throw new Error("Paikkakuntaa ei löydy.");
      }
      setData({
        ...data,
        paikkakunta: tiedot.name,
        lampotila: tiedot.main.temp.toFixed(),
        kuvaus: tiedot.weather[0].description,
        ikoni: tiedot.weather[0].icon,
        date: format(fromUnixTime(tiedot.dt), "d.M. HH:mm"),
      })

      setEnnusteData({
        ...ennusteData,
        ennustetiedot: ennusteTiedot
      })

    } catch (error) {
      setVirhe(error.toString());
    }
  }

  useEffect(() => {
    haeTiedot();
  }, [])

  useEffect(() => {
    haeTiedot();
  }, [kaupunki])

  return (
    <Router>
      
        <Tabs value={false} style={{backgroundColor:"#bceef5"}}>
          <Tab label="Päivän sää" component={Link} to="/"/>
          <Tab label="Sääennuste" component={Link} to="/ennuste"/>
        </Tabs>
      
      <Route path="/" exact>
        <WeatherNyt data={data} kaupunki={kaupunki} setKaupunki={setKaupunki} virhe={virhe} setVirhe={setVirhe}/>
      </Route>
      <Route path="/ennuste">
        <Ennuste ennusteData={ennusteData} setEnnusteData={setEnnusteData}></Ennuste>
      </Route>
      
    </Router>
  );
}

export default App;
