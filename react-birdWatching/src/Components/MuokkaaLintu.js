import { Button, Container, TextField, Typography } from "@material-ui/core";
import { Link, useHistory, useParams } from "react-router-dom";
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { fi } from 'date-fns/locale';
import { makeStyles } from "@material-ui/core/styles";
import { useRef, useState } from "react";

const useStyles = makeStyles({
    input: {
        marginBottom: 10
    },
    nappi: {
        marginBottom: 5,
    }
})

function MuokkaaLintu(props) {

    const tyylit = useStyles();
    const history = useHistory();
    const { id } = useParams();
    const lomaketiedot = useRef({});

    const muokattavaLintu = props.linnut.filter((lintu) => {
                                return(lintu.id === id);
                            })[0];

    const [aika, setAika] = useState(muokattavaLintu.aika);
    const [lintu, setLintu] = useState(muokattavaLintu.lintu);
    const [paikka, setPaikka] = useState(muokattavaLintu.paikka);

    const inputHandler = (e) => {
        lomaketiedot.current[e.target.name] = e.target.value;
    }

    const formHandler = (e) => {
        e.preventDefault();
        let apuaika = muokattavaLintu.aika;

        if (!lomaketiedot.current.lintu) {
            lomaketiedot.current.lintu = lintu;
        }
        if (!lomaketiedot.current.paikka) {
            lomaketiedot.current.paikka = paikka;
        }
        
       
        let apulista = props.linnut.filter((lintu) => {return(lintu.id !== id)});
        if (aika !== muokattavaLintu.aika) {
            apuaika = aika.getTime();
        }
        let apulintu = {
                        id: id,
                        aika: apuaika,
                        paikka: lomaketiedot.current.paikka,
                        lintu: lomaketiedot.current.lintu
        }
        console.log(apulintu)
        props.setLinnut([...apulista, apulintu]);
        history.push({pathname:"/"});
        
    }

    return(

        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fi}>
            <Container maxWidth="sm">

                <Typography
                    variant="h4"
                    align="center"
                    className={tyylit.input}
                    >Muokkaa havaintoa {muokattavaLintu.lintu}
                </Typography>

                <form onSubmit={formHandler}>

                    <DateTimePicker
                        ampm={false}
                        format="d.M.y HH:mm"
                        fullWidth
                        label="Havaintoaika"
                        cancelLabel="Peruuta"
                        inputVariant="outlined"
                        className={tyylit.input}
                        onChange={setAika}
                        value={aika}
                        disableFuture
                    />

                    <TextField
                        name="lintu"
                        label="Havaittu lintu"
                        defaultValue={lintu}
                        fullWidth
                        variant="outlined"
                        className={tyylit.input}
                        onChange={e => {setLintu(); inputHandler(e)}}
                    />

                    <TextField
                        name="paikka"
                        label="Havaintopaikka"
                        defaultValue={paikka}
                        fullWidth
                        variant="outlined"
                        className={tyylit.input}
                        onChange={e => {setPaikka(); inputHandler(e)}}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit"
                        className={tyylit.nappi}
                    >
                        Muokkaa havaintoa
                    </Button>

                    <Button
                    component={Link}
                    to="/"
                    variant="contained"
                    fullWidth
                    className={tyylit.nappi}
                    >
                        Peruuta
                    </Button>

                </form>

            </Container>
        </MuiPickersUtilsProvider>
    );
}

export default MuokkaaLintu;