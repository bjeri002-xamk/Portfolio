import { AppBar, ListItem, Toolbar, List, ListItemText, IconButton, Drawer, CssBaseline, Button, Typography} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from "react";

function Valikko () {

    const [naytaValikko, setNaytaValikko] = useState(false);

    return(
        <CssBaseline>
        <AppBar position="static">
            <Toolbar style={{backgroundColor: "#026635"}}>
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={() => {setNaytaValikko(true)}}
                >
                    <MenuIcon/>
                </IconButton>
                <Button 
                    color="inherit" 
                    size="large" 
                    component={Link}
                    to="/breaking-bad-quiz"
                    style={{marginLeft:440, fontSize:20}}>Breaking Bad character-game</Button>
                <Drawer
                    open={naytaValikko}
                    onClose={() => {setNaytaValikko(false)}}>
                    
                    <Typography style={{color:"gray", marginLeft:40, marginTop:40}}>Jenna Viljakainen 2021</Typography>

                    <List 
                        onClick={() => {setNaytaValikko(false)}}
                        style={{
                            width:200,
                            color: "#026635",
                            margin: 40}}>

                        <ListItem 
                            button
                            component={Link} 
                            to="/peli"
                        >
                            <ListItemText style={{fontSize:90}}>Game</ListItemText>

                        </ListItem>

                        <ListItem 
                            button 
                            component={Link} 
                            to="/listaus"
                        >
                            <ListItemText>Characters</ListItemText>
                        </ListItem>

                        <ListItem 
                            button 
                            component={Link} 
                            to="/highscores"
                        >
                            <ListItemText>Highscores</ListItemText>
                        </ListItem>
                    </List>
                    
                    </Drawer>
            </Toolbar>
            </AppBar>
            </CssBaseline>
    );
}

export default Valikko;