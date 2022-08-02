import { Container, Typography, Button, List, ListItemText, ListItem } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    lista: {
        marginLeft:20,
        color:"#026635"
    },
    color: {
        color:"#026635"
    }
    
});

function Henkilotiedot(props) {
    
    const tyylit = useStyles();
    const { id } = useParams();

    const apuhenkilo = props.data.henkilot.filter((henkilo) => {
        return (henkilo.char_id === Number(id))
    })[0];

    return(
        <Container maxWidth="sm">

            <Typography 
                variant="h2" 
                align="center"
                className={tyylit.color}
            >
                {apuhenkilo.name}
            </Typography>
            <Typography 
                variant="h6" 
                align="center"
                className={tyylit.color}
            >
                ({apuhenkilo.nickname})
            </Typography>

            <img src={apuhenkilo.img} alt="kuva" style={{height:500}}/>
            
            <List>
                <ListItem>
                    <ListItemText className={tyylit.color}>Actor/Actress: {apuhenkilo.portrayed}</ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemText className={tyylit.color}>Born: {apuhenkilo.birthday}</ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemText className={tyylit.color}>Status: {apuhenkilo.status}</ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemText className={tyylit.color}>Occupation:</ListItemText>
                </ListItem>
                
                    {apuhenkilo.occupation.map((ammatti, idx) => {
                        return(
                            <ListItem key={idx}>
                                <ListItemText className={tyylit.lista}>-{ammatti}</ListItemText>
                            </ListItem>
                        );
                    })}
                
            </List>
            
           
            <Button 
                component={Link} 
                to="/listaus" 
                variant="outlined"
                size="large"
                style={{
                    backgroundColor: "#026635", 
                    color:"white",
                    marginTop:10,
                    marginBottom: 50}}
            >
                Return
            </Button>
        </Container>
    );
}

export default Henkilotiedot;