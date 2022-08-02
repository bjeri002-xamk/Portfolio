import { Container, ListItem, ListItemText, Typography, List, Button } from "@material-ui/core";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    color: {
        color:"#026635"
    },
    
  });

function Highscores (props) {

    const tyylit = useStyles();

    return(
        <Container maxWidth="sm">
            <Typography 
                variant="h3" 
                align="center" 
                style={{margin:15, color:"#026635"}}
            >
                Highscores
            </Typography>

            <List>
            {props.pisteTiedot.sort((a,b) => b.pisteet - a.pisteet).map((pistetieto, idx) => {
                return(
                    <ListItem key={idx} divider className={tyylit.color} style={{width:520, textAlign: "center"}}>
                        <ListItemText primary={format(pistetieto.pvm, "d/M/y")} className={tyylit.color} style={{width:200}}/>
                        <ListItemText primary={pistetieto.nimi} className={tyylit.color} style={{width:200}}/>
                        <ListItemText primary={pistetieto.pisteet} className={tyylit.color} style={{width:200}}/>
                    </ListItem>
                );
            })}
            </List>
            <Button
                component={Link}
                to="/peli"
                variant="outlined"
                style={{
                    backgroundColor: "#026635", 
                    color:"white",
                    marginTop:10,
                    marginLeft: 210,
                    marginBottom:50
                }}
            >
                Play Again
            </Button>
        </Container>
    );
}

export default Highscores;