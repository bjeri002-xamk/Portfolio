import { Container, TextField, Typography, Button } from "@material-ui/core";
import { useRef, useState } from "react";
import { useHistory, useLocation } from "react-router";
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    color: {
        color:"#026635",
        margin:15
    },
    
  });

function TallennaPisteet (props) {

    const tyylit = useStyles();
    const location = useLocation();
    const lomaketiedot = useRef({});
    const history = useHistory();
    const [pvm, setPvm] = useState(new Date());

    const formHandler = (e) => {
        e.preventDefault();

        let aputiedot = {
                nimi:lomaketiedot.current.nimimerkki,
                pisteet: location.state.details,
                pvm: pvm.getTime()
        }
        props.setPistetiedot([...props.pisteTiedot, aputiedot]);
        history.push({pathname: "/highscores"});
    }
    const inputHandler = (e) => {
        lomaketiedot.current[e.target.name] = e.target.value;
    }

    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Container maxWidth="sm">

            <Typography 
                variant="h2" 
                align="center" 
                className={tyylit.color}
            >
                GAME OVER
            </Typography>

            <Typography 
                variant="h6"
                align="center"
            >
                Score: {location.state.details}
            </Typography>

            <form onSubmit={formHandler}
            style={{marginTop:20}}>
                
                <DatePicker
                    name="aika"
                    format="d/M/y"
                    readOnly
                    inputVariant="outlined"
                    onChange={setPvm}
                    value={pvm}
                    style={{marginLeft:190}}

                />
                <TextField
                    name="nimimerkki"
                    label="Nickname"
                    onChange={inputHandler}
                    variant="outlined"
                    style={{marginLeft:190, marginTop:10, width:215}}/>
                
                <Button 
                    type="submit" 
                    fullWidth 
                    variant="outlined"
                    style={{
                        marginTop:20, 
                        backgroundColor:"#026635", 
                        color:"white"}}
                    >
                        Save
                    </Button>
            </form>
        </Container>
        </MuiPickersUtilsProvider>
    );
}

export default TallennaPisteet;