import { Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    nappi: {
        width:300,
        marginTop: 5,
        marginLeft: 130,
        marginBottom: 10,
        backgroundColor: "#bceef5"
    },
    input: {
        width:300,
        marginTop: 20,
        marginLeft: 130,
    }
})

function WeatherNyt(props) {

    const tyylit = useStyles();
    const [kaupunki, setKaupunki] = useState();

    const muotoileKaupunki = () => {
        let muokattuKaupunki = kaupunki.toString().toLowerCase();
        for (let i = 0; i < muokattuKaupunki.length; i++) {
            if (muokattuKaupunki[i] === "ä" ){
                muokattuKaupunki = muokattuKaupunki.replace("ä", "a");
            }
            else if (muokattuKaupunki[i] === "å"){
                muokattuKaupunki = muokattuKaupunki.replace("å", "o");
            }
            else if (muokattuKaupunki[i] === "ö") {
                muokattuKaupunki = muokattuKaupunki.replace("ö", "o");
            }
        }
        props.setKaupunki(muokattuKaupunki);
    }
    
    return(
        <Container maxWidth="sm">

            <Typography
                variant="h3"
                align="center"
                style={{marginBottom:15, marginTop:15}}
            >
                {props.data.paikkakunta} 
            </Typography>

            <Grid container justify="center">
                <Grid item xs={5}>

                    <Paper style={{backgroundColor: "#bceef5", padding:15}}>

                        <Typography align="center">{props.data.date}</Typography>
                        <img src= {`http://openweathermap.org/img/wn/${props.data.ikoni}@2x.png`} style={{marginLeft:40}} alt="weather"/>
                        <Typography align="center">{props.data.lampotila}°C</Typography>
                        <Typography align="center">{props.data.kuvaus}</Typography>

                    </Paper>
                </Grid>
            </Grid>

            <TextField
                variant="outlined"
                placeholder="Syötä haluamasi kaupunki"
                className={tyylit.input}
                onChange= { (e) => {setKaupunki(e.target.value)}}
            />
            <Button
                className={tyylit.nappi}
                variant="contained"
                onClick={muotoileKaupunki}
            >
                Vaihda
            </Button>

            <Typography align="center">{props.virhe}</Typography>

        </Container>
    );
}

export default WeatherNyt;