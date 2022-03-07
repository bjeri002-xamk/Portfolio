import { Container, Typography, TextField, Radio, Button, FormControlLabel, RadioGroup, FormHelperText, FormControl } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    inputit: {
        marginBottom:10
    },
    nappi: {
        marginTop: 10
    },
    otsikko: {
        margin:20,
        textAlign:"center"
    }
});

function Ilmoittautuminen() {

    const tyylit = useStyles();
    const lomaketiedot = useRef({});
    const [virheilmoitus, setVirheilmoitus] = useState({});
    const history = useHistory();

    const formHandler = (e) => {
        e.preventDefault();
        let virheet = {};

        if (!lomaketiedot.current.etunimi || lomaketiedot.current.etunimi.length < 2) {
            virheet = {...virheet, etunimi : "Nimi puuttuu"}
        
        }
        if (!lomaketiedot.current.sukunimi || lomaketiedot.current.sukunimi.length < 2) {
            virheet = {...virheet, sukunimi : "Nimi puuttuu"}
        } 

        if (!lomaketiedot.current.puhnumero && !lomaketiedot.current.email) {
            
            virheet= {...virheet, puhnumero : "Puhelinnumero tai sähköposti pakollinen"}
            virheet= {...virheet, email : "Puhelinnumero tai sähköposti pakollinen"}
            
        } else if (lomaketiedot.current.puhnumero) {
            if ((/[a-zA-Z]/).test(lomaketiedot.current.puhnumero)) {
                virheet= {...virheet, puhnumero : "Virheellinen puhelinnumero"}
            }
        } else if (lomaketiedot.current.email) {
            if (lomaketiedot.current.email.search("@") === -1) {
                virheet= {...virheet, email : "Virheellinen sähköposti"}
            }
        }

        if (!lomaketiedot.current.ikaluokka) {
            virheet = {...virheet, ikaluokka : "Valitse ikäluokka"}
        }

        if (Object.entries(virheet).length > 0) {
            setVirheilmoitus({...virheet});

        } else {
            
            history.push({
                pathname:"/kiitos", 
                state: {details: lomaketiedot}
            });
            setVirheilmoitus({});
        }
    }

    const inputHandler = (e) => {
        lomaketiedot.current[e.target.name] = e.target.value;
    }

    return(
        <Container maxWidth="sm">

            <Typography className={tyylit.otsikko} variant="h2" color="secondary">Ilmoittautuminen</Typography>

            <form onSubmit={formHandler}>

                <TextField 
                    name="etunimi"
                    className={tyylit.inputit}
                    variant="outlined"
                    label="Etunimi"
                    fullWidth={true}
                    onChange={inputHandler}
                    error={Boolean(virheilmoitus.etunimi)}
                    helperText={virheilmoitus.etunimi}
                />
                <TextField 
                    name="sukunimi"
                    className={tyylit.inputit}
                    variant="outlined"
                    label="Sukunimi"
                    fullWidth={true}
                    onChange={inputHandler}
                    error={Boolean(virheilmoitus.sukunimi)}
                    helperText={virheilmoitus.sukunimi}
                />
                <TextField 
                    name="paikkakunta"
                    className={tyylit.inputit}
                    variant="outlined"
                    label="Asuinpaikkakunta"
                    fullWidth={true}
                    onChange={inputHandler}
                />
                <TextField 
                    name="puhnumero"
                    className={tyylit.inputit}
                    variant="outlined"
                    label="Puhelinnumero"
                    fullWidth={true}
                    onChange={inputHandler}
                    error={Boolean(virheilmoitus.puhnumero)}
                    helperText={virheilmoitus.puhnumero}
                />
                <TextField 
                    name="email"
                    className={tyylit.inputit}
                    variant="outlined"
                    label="Sähköposti"
                    fullWidth={true}
                    onChange={inputHandler}
                    error={Boolean(virheilmoitus.email)}
                    helperText={virheilmoitus.email}
                />
                <FormControl >

                    <FormHelperText
                        error={Boolean(virheilmoitus.ikaluokka)}>
                        {virheilmoitus.ikaluokka}
                    </FormHelperText>

                    <RadioGroup 
                        name="ikaluokka" 
                        onChange={inputHandler}
                        >
                        <FormControlLabel control={<Radio/>} value="alle 15 vuotiaat" label="alle 15 vuotiaat" />
                        <FormControlLabel control={<Radio/>} value="15-19 vuotiaat" label="15 - 19 vuotiaat"/>
                        <FormControlLabel control={<Radio/>} value="20-39 vuotiaat" label="20 - 39 vuotiaat"/>
                        <FormControlLabel control={<Radio/>} value="40-59 vuotiaat" label="40 - 59 vuotiaat"/>
                        <FormControlLabel control={<Radio/>} value="60-69 vuotiaat" label="60 - 69 vuotiaat"/>
                        <FormControlLabel control={<Radio/>} value="70-79 vuotiaat" label="70 - 79 vuotiaat"/>
                        <FormControlLabel control={<Radio/>} value="yli 80 vuotiaat" label="yli 80 vuotiaat"/>
                    
                    </RadioGroup>
                </FormControl>

                <Button
                    className={tyylit.nappi}
                    variant="contained"
                    color="secondary"
                    fullWidth={true}
                    size="large"
                    type="submit"
                >
                    Lähetä ilmoittautuminen
                </Button>

            </form>

        </Container>
    );
}

export default Ilmoittautuminen;