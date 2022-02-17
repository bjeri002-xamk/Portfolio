import { Button, Container, Typography } from "@material-ui/core";
import { useLocation, Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    teksti: {
        marginTop: 15
    },
    nappi: {
        marginTop:5,
        padding: 10,
        fontSize: 20
    }
});

function Kiitos() {

    const location = useLocation();
    const tyylit = useStyles();
    const tiedot = [location.state.details];

    return(
        <Container maxWidth="sm">
            <Typography className={tyylit.teksti} variant="h3" align="center" color="secondary">Kiitos ilmoittautumisesta!</Typography>
            <Typography className={tyylit.teksti} variant="h5" align="center">Tässä ilmoittamasi tiedot:</Typography>
            {tiedot.map ((tieto,idx) => {
                return(
                    <Typography key={idx} variant="h6" align="center" className={tyylit.teksti}>
                        Etunimi: {tieto.current.etunimi}<br/>
                        Sukunimi: {tieto.current.sukunimi}<br/>
                        Paikkakunta: {tieto.current.paikkakunta}<br/>
                        Puhelinnumero: {tieto.current.puhnumero}<br/>
                        Sähköposti: {tieto.current.email}<br/>
                        Ikäluokka: {tieto.current.ikaluokka}<br/>
                    </Typography>
                    
                )
            })}
            <Button
                className={tyylit.nappi}
                component={Link}
                to="/"
                color="secondary"
                fullWidth
                variant="contained"
                >Palaa etusivulle
            </Button>
            
        </Container>
    );
}

export default Kiitos;