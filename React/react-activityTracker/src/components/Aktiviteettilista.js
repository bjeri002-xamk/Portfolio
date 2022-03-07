import { Button, Container, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { differenceInDays, differenceInMinutes, format } from "date-fns";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    lista: {
        width: 160,
    },
    laatikko: {
        marginTop:20,
    }
})

function Aktiviteettilista(props) {

    const tyylit = useStyles();

    const aikojenMuotoilu = (minuutit) => {
        if (minuutit >= 60) {
            let tunnit = Math.floor(minuutit / 60);
            let uudetMin = minuutit - tunnit * 60;

            if (tunnit === 1) {
                return(tunnit + " tunti ja " + uudetMin + " minuuttia")
            }
            else if (tunnit === 1 && uudetMin === 1) {
                return(tunnit + " tunti ja " + uudetMin + " minuutti")
            }
            else if (tunnit > 1 && uudetMin === 1) {
                return(tunnit + " tuntia ja " + uudetMin + " minuutti")
            } else {
                return(tunnit + " tuntia ja " + uudetMin + " minuuttia")
            }
        
        } else if (minuutit === 1) {
            return(minuutit + " minuutti")
        }
        else {
            return(minuutit + " minuuttia");
        }
    }

    return(
        <Container maxWidth="sm" className={tyylit.laatikko}>
            <Typography variant="h3" align="center">Aktiviteettilistaus</Typography>
            <Typography align="center">
                Kokonaisaika: {aikojenMuotoilu(props.aktiviteetit.reduce((acc, current) => acc + differenceInMinutes(current.loppuaika, current.alkuaika), 0))}</Typography>
            <Typography align="center">Viimeisen 7 päivän kokonaisaika: {aikojenMuotoilu(props.aktiviteetit.filter(loppuaika => differenceInDays(new Date(), loppuaika.loppuaika) < 7 ).reduce((acc, current) => acc + differenceInMinutes(current.loppuaika, current.alkuaika), 0))}</Typography>
            <List>
                {props.aktiviteetit.sort((a,b) => b.loppuaika - a.loppuaika).map((aktiviteetti, idx) => {
                    return(
                        <ListItem key={idx} divider>
                            
                            <ListItemText 
                                primary={aktiviteetti.aktiviteetti} 
                                secondary={aikojenMuotoilu(differenceInMinutes(aktiviteetti.loppuaika, aktiviteetti.alkuaika))}
                                className={tyylit.lista}/>
                            <ListItemText 
                                primary={format(aktiviteetti.alkuaika, "d.M.y HH:mm")} 
                                secondary="Alkamisajankohta"
                                className={tyylit.lista}/>
                            <ListItemText primary={format(aktiviteetti.loppuaika, "d.M.y HH:mm")} secondary="Päättymisajankohta"/>
                        </ListItem>
                    );
                })}
            </List>
            <Button
                component={Link}
                to="/uusiaktiviteetti"
                fullWidth
                variant="contained">
                Lisää uusi aktiviteetti
            </Button>
        </Container>
    );
}

export default Aktiviteettilista;