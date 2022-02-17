import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { format, fromUnixTime, getHours } from "date-fns";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    paperi: {
        height: 200,
        width: 150,
        margin:15,
        backgroundColor: "#bceef5",
        padding: 10
    }
})

function Ennuste(props) {

    const tyylit = useStyles();

    const muutaAika = (aika) => {
        let muokattuAika = fromUnixTime(aika);
        muokattuAika = format(muokattuAika, "d.M. HH:mm")
        return(muokattuAika);
    }

    return(
            <Container maxWidth="sm">
                
                <Typography 
                    variant="h3" 
                    align="center" 
                    style={{marginBottom:15, marginTop:15}}
                >
                    {props.ennusteData.ennustetiedot.city.name}
                </Typography>
                
                <Grid container spacing={1} justify="center">
                    {props.ennusteData.ennustetiedot.list.filter(aika => getHours(aika.dt * 1000) === 5 || getHours(aika.dt * 1000) === 17).map((ennuste,idx) => {
                        return(
                            <Grid key={idx} item xs={5}>
                                <Paper className={tyylit.paperi}>

                                    <Typography align="center">{muutaAika(ennuste.dt)}</Typography>
                                    <Typography align="center" variant="h6">{ennuste.main.temp.toFixed()}°C</Typography>
                                    <img src={`http://openweathermap.org/img/wn/${ennuste.weather[0].icon}@2x.png`} style={{marginLeft:30}} alt="weather"/>
                                    <Typography align="center">{ennuste.weather[0].description}</Typography>

                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
    )
}

export default Ennuste;