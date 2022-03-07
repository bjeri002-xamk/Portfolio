import { Button, Container, TextField, Typography } from "@material-ui/core";
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { fi } from 'date-fns/locale';
import { useState, useRef } from "react";
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    nappi: {
        marginBottom: 10,
    },
    laatikko: {
        marginTop: 20
    }
})

function UusiAktiviteetti(props) {

    const [alkupvmaika, setAlkupvmaika] = useState(new Date());
    const [loppupvmaika, setLoppupvmaika] = useState(new Date());
    const lomaketiedot = useRef({});
    const [virheilmoitus, setVirheilmoitus] = useState({});
    const history = useHistory();
    const tyylit = useStyles();


    const formHandler = (e) => {
        e.preventDefault();
        let virheet = {};

        if (!lomaketiedot.current.aktiviteetti) {
            virheet = {...virheet, aktiviteetti : "Aktiviteetti puuttuu"};
        }

        if (alkupvmaika >= loppupvmaika) {
            virheet = {...virheet, alkuaika : "Alkamisajankohta oltava ennen päättymisajankohtaa"}
        }

        if (Object.entries(virheet).length > 0) {
            setVirheilmoitus({...virheet});
        } else {
            let aktiviteettiApu = {
                                    alkuaika: alkupvmaika,
                                    loppuaika: loppupvmaika,
                                    aktiviteetti: lomaketiedot.current.aktiviteetti
                                }
            props.setAktiviteetit([...props.aktiviteetit, aktiviteettiApu]);
            history.push({pathname:"/"});
        }
    }

    const inputHandler = (e) => {
        lomaketiedot.current[e.target.name] = e.target.value;
    }

    return(

        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fi}>
        <Container maxWidth="sm" className={tyylit.laatikko}>

            <Typography style={{marginBottom:10}}>Syötä harjoitustiedot:</Typography>

            <form onSubmit={formHandler}>

                <DateTimePicker
                    name="alkuaika"
                    label="Alkamisajankohta"
                    inputVariant="outlined"
                    cancelLabel="Peruuta"
                    ampm={false}
                    value={alkupvmaika.setSeconds(0)}
                    onChange={setAlkupvmaika}
                    format="d.M.y HH:mm"
                    error = {Boolean(virheilmoitus.alkuaika)}
                    helperText={virheilmoitus.alkuaika}
                    fullWidth 
                    style={{marginBottom:10}}
                    disableFuture={true}
                />

                <DateTimePicker
                    name="loppuaika"
                    label="Päättymisajankohta"
                    inputVariant="outlined"
                    cancelLabel="Peruuta"
                    ampm={false}
                    value={loppupvmaika.setSeconds(0)}
                    onChange={setLoppupvmaika}
                    format="d.M.y HH:mm"
                    error = {Boolean(virheilmoitus.loppuaika)}
                    helperText={virheilmoitus.loppuaika}
                    fullWidth
                    style={{marginBottom:10}}
                    disableFuture={true}
                />

                <TextField
                    name="aktiviteetti"
                    label="Aktiviteetin kuvaus"
                    fullWidth
                    variant="outlined"
                    style={{marginBottom:10}}
                    onChange={inputHandler}
                    error={Boolean(virheilmoitus.aktiviteetti)}
                    helperText={virheilmoitus.aktiviteetti}
                />

                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    type="submit"
                    className={tyylit.nappi}
                >
                    Lisää aktiviteetti
                </Button>
            </form>
            <Button
                variant="contained"
                fullWidth
                component={Link}
                to="/"
                >Takaisin listaukseen</Button>

        </Container>
        </MuiPickersUtilsProvider>
    );
}

export default UusiAktiviteetti;