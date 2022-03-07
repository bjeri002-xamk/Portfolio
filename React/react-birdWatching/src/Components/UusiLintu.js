import { v4 as uuid} from 'uuid';
import { useRef, useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Button, Container, TextField, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, Link } from 'react-router-dom';

const useStyles = makeStyles({
    input: {
        marginBottom: 10
    },
    nappi: {
        marginBottom: 5
    }
})

function UusiLintu(props) {

    const [aika, setAika] = useState(new Date());
    const tyylit = useStyles();
    const lomaketiedot = useRef({});
    const [virheilmoitus, setVirheilmoitus] = useState({});
    const history = useHistory();

    const formHandler = (e) => {
        e.preventDefault();
        let virheet = {};

        if (!lomaketiedot.current.paikka) {
            virheet = {...virheet, paikka : "Lisää havaintopaikka"};
        }
        if (!lomaketiedot.current.lintu) {
            virheet = {...virheet, lintu : "Lisää havaittu lintu"}
        }
        if (Object.entries(virheet).length > 0) {
            setVirheilmoitus({...virheet});
        } else {
            let apulintu = {
                            id: uuid(),
                            aika: aika.getTime(),
                            paikka: lomaketiedot.current.paikka,
                            lintu: lomaketiedot.current.lintu
            }
            props.setLinnut([...props.linnut, apulintu]);
            
            history.push({pathname:"/"});
        }
    }

    const inputHandler = (e) => {
        lomaketiedot.current[e.target.name] = e.target.value;
    }
    return(

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Container maxWidth="sm">
                
                <Typography 
                    variant="h4"
                    align="center"
                    className={tyylit.input}
                >
                    Lisää uusi lintuhavainto
                </Typography>

                <form onSubmit={formHandler}>
                    
                    <DateTimePicker
                        name="aika"
                        ampm={false}
                        format="d.M.y HH:mm"
                        fullWidth 
                        readOnly
                        inputVariant="outlined"
                        className={tyylit.input}
                        onChange={setAika}
                        value={aika}
                    />

                    <TextField
                        name="lintu"
                        label="Havaittu lintu"
                        fullWidth
                        variant="outlined"
                        className={tyylit.input}
                        onChange={inputHandler}
                        error={Boolean(virheilmoitus.lintu)}
                        helperText={virheilmoitus.lintu}
                    />

                    <TextField
                        name="paikka"
                        label="Havainnon paikka"
                        fullWidth
                        variant="outlined"
                        className={tyylit.input}
                        onChange={inputHandler}
                        error={Boolean(virheilmoitus.paikka)}
                        helperText={virheilmoitus.paikka}
                    />

                    <Button
                        variant="contained"
                        fullWidth
                        type="submit"
                        color="primary"
                        className={tyylit.nappi}
                    >
                        Lisää lintu
                    </Button>

                    <Button
                    component={Link}
                    to="/"
                    variant="contained"
                    fullWidth
                    >
                        Peruuta
                    </Button>

                </form>
            </Container>
        </MuiPickersUtilsProvider>
    );
}

export default UusiLintu;