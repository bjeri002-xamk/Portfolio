import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Select, MenuItem, InputLabel, FormControl, Slider, Checkbox, FormControlLabel, TextField, Button, Dialog, DialogTitle} from '@material-ui/core';

const useStyles = makeStyles({
  komponentit : {
              marginTop: "10px",
              marginBottom: "25px",
              width: "350px",
              display: "block"
  },
  tekstit : {
              width: "350px",
              marginTop: "10px",
              marginBottom: "15px"
  },
  dialogi : {
              padding: "15px 25px",
              fontSize: "20px",
              lineHeight: "38px"
  }
})

function App() {

  const tyylit = useStyles();

  const [mokit, setMokit] = useState([
                                      {
                                        nimi: "Pieni mökki",
                                        hinta: 50
                                      },
                                      {
                                        nimi: "Iso mökki",
                                        hinta: 100
                                      },
                                      {
                                        nimi: "Hulppea mökki",
                                        hinta: 200
                                      },
                                      {
                                        nimi: "Luksusmökki",
                                        hinta: 350
                                      }
  ]);

  const [hinta, setHinta] = useState('');
  const [paivat, setPaiva] = useState(1);
  const [loppuSumma, setLoppuSumma] = useState(0);
  const [siivous, setSiivous] = useState(false);
  const [nimi, setNimi] = useState();
  const [saapumisPaiva, setSaapumispaiva] = useState();
  const [dialogiAuki, setDialogiauki] = useState(false);

  useEffect( () => {
    if (paivat && hinta) {
      if (siivous===true) {
        setLoppuSumma(paivat* hinta + 100);
      } else {
        setLoppuSumma(paivat* hinta);
      }
    } 
  }, [hinta, paivat, siivous]);

  const handleSlider = (e, paivia) => {
    setPaiva(paivia);
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" className={tyylit.tekstit}>LOMAMÖKKEJÄ</Typography>

      <FormControl>
        <InputLabel>Valitse mökki</InputLabel>
        <Select 
          className={tyylit.komponentit}
          onChange={ (e) => {setHinta(e.target.value)}}
          value = {hinta}
        >
          {mokit.map ((mokki,idx) => {
            return (
              <MenuItem 
                key={idx}
                value={mokki.hinta}
              >
                {mokki.nimi}, {mokki.hinta}e/vrk
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Typography variant="body1" style={{marginBottom: "35px"}}>Valitse päivät:</Typography>
        <Slider
          className={tyylit.komponentit}
          defaultValue={1}
          step={1}
          valueLabelDisplay="on"
          marks
          min={1}
          max={14}
          value={paivat}
          onChange={handleSlider}
          
        ></Slider>

        <FormControlLabel
          control={<Checkbox onChange={ (e) => {setSiivous(e.target.checked)}}/>}
          label = "Lisää loppusiivous (100e)"
        ></FormControlLabel>

        <TextField
          variant="outlined"
          label="Nimi"
          placeholder="Syötä nimi.."
          className={tyylit.tekstit}
          onChange= { (e) => {setNimi(e.target.value)}}
        ></TextField>

        <TextField
          variant="outlined"
          label="Saapumispäivä"
          placeholder="Syötä saapumispäivä.."
          className={tyylit.tekstit}
          onChange= { (e) => {setSaapumispaiva(e.target.value)}}
        ></TextField>
   
      <Typography variant="body1">Kokonaishinta: {loppuSumma} euroa.</Typography>

      <Button
        className={tyylit.komponentit}
        variant="outlined"
        color="secondary"
        onClick= { (e) => {setDialogiauki(true)}}
        >Varaa mökki
      </Button>

      <Dialog
        open={dialogiAuki}
        onClose={(e) => {setDialogiauki(false)}}>
        
        <DialogTitle className={tyylit.dialogi}>Varauksen yhteenveto:</DialogTitle>
        
        <Typography className={tyylit.dialogi}>
          Varauksen loppusumma: {loppuSumma}e<br/>
          Saapumispäivä: {saapumisPaiva}<br/>
          Varaajan nimi: {nimi}
        </Typography>

      </Dialog>
    
    </Container>
  );
}

export default App;
