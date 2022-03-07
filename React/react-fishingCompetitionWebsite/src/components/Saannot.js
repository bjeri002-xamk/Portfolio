import { Container, List, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    lista: {
        marginTop: 20
    }
});

function Saannot() {
    const tyylit = useStyles();
    return(
        <Container maxWidth="sm">
            <Typography variant="h3" align="center" className={tyylit.lista} color="secondary">Säännöt:</Typography>
            <List className={tyylit.lista}>
                <ListItemText className={tyylit.lista}>-Kilpailuaika on neljä (4) tuntia, kello 9.00 - 13.00. Paluuaika ½ h</ListItemText>
                <ListItemText className={tyylit.lista}>-Kilpailualue on selvästi merkitty ja pilkkiminen tämän alueen ulkopuolella on kielletty.</ListItemText>
                <ListItemText className={tyylit.lista}>-Pilkkiminen ja reiän kairaaminen viittä (5) metriä lähemmäksi toisen avantoa on kielletty ilman
                    asianomaisen suostumusta.</ListItemText>
                <ListItemText className={tyylit.lista}>-Kilpailun aikana jääkairaa ei saa jättää lumelle tai jäälle makaamaan vaan se on kairattava
                    pilkkimisen ajaksi pystyyn.</ListItemText>
                <ListItemText className={tyylit.lista}>-Kilpailussa jokaisella kilpailijalla on oltava mukanaan jäänaskalit.</ListItemText>
                <ListItemText className={tyylit.lista}>-Lähtö- ja maalialueelle saavuttaessa ja niillä liikuttaessa on jääkairan terä oltava
                    ehdottomasti suojattuna.</ListItemText>
                <ListItemText className={tyylit.lista}>-Jokainen kilpailija osallistuu kilpailuun omalla vastuulla. Kilpailussa noudatetaan muilta osin SMpilkin sääntöjä.</ListItemText>
                <ListItemText className={tyylit.lista}>-Näiden sääntöjen lisäksi järjestäjä voi tehdä muutoksia sääntöihin ja kilpailualueen rajaamiseen.</ListItemText>
                <ListItemText className={tyylit.lista}>-Järjestävä osasto nimeää tuomarineuvoston.</ListItemText>
                
            </List>
        </Container>
    );
}

export default Saannot;