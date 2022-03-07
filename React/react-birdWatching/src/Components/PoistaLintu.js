import { Container, Typography, Button } from "@material-ui/core";
import { Link, useHistory, useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import { format } from "date-fns";

const useStyles = makeStyles({
    otsikko: {
        marginBottom: 10
    },
    nappi: {
        marginBottom: 5,
    }
})

function PoistaLintu(props) {

    const tyylit = useStyles();
    const history = useHistory();
    const { id } = useParams();

    const poistettavaLintu = props.linnut.filter((lintu) => {
                                return(lintu.id === id);
                            })[0];

    const formHandler = (e) => {
        
        e.preventDefault();

        let apulinnut = props.linnut.filter((lintu) => {
            return(lintu.id !== id);
        });

        props.setLinnut([...apulinnut]);
        history.push("/");
    }

    return(
        <Container maxWidth="sm">

            <form onSubmit={formHandler}>

                <Typography 
                    variant="h5"
                    align="center"
                    >Haluatko varmasti poistaa tehtävän {poistettavaLintu.lintu}?
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    className={tyylit.otsikko}
                >
                    ({format(poistettavaLintu.aika, "d.M.y HH:mm")})
                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                    className={tyylit.nappi}
                >Poista
                </Button>

                <Button
                    component={Link}
                    to="/"
                    variant="contained"
                    fullWidth
                >Peruuta
                </Button>

            </form>

        </Container>
    );
}

export default PoistaLintu;