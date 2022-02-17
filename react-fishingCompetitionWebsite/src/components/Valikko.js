import { AppBar, Container, CssBaseline, List, ListItem, Toolbar} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    lista: {
        display: "inline",
        fontSize: 25,
        margin: 20,
        padding: 25,
    }
});

function Valikko() {

    const tyylit = useStyles();

    return(
        <CssBaseline>
            <AppBar 
                color="secondary"
                position="static">
                <Toolbar style={{padding:15, textAlign:"center"}}>
                    <Container >
                        <List>
                            <ListItem 
                                className={tyylit.lista} 
                                button component={Link} to="/"
                                >Aloitus</ListItem>
                            <ListItem 
                                className={tyylit.lista} 
                                button component={Link} to="/saannot"
                                >Säännöt</ListItem>
                            <ListItem 
                                className={tyylit.lista} 
                                button component={Link} to="/ilmoittautuminen"
                                >Ilmoittautuminen</ListItem>
                        </List>
                    </Container>
                </Toolbar>
            </AppBar>
        </CssBaseline>
    );
}

export default Valikko;