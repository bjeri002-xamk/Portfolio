import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  nappi: {
      marginTop: 50,
      marginLeft:220,
      backgroundColor: "#026635",
      color: "white",
      width:150,
  },
  nappi2: {
      marginTop: 50,
      marginLeft:50,
      backgroundColor: "#026635",
      color: "white",
      width:150,
  },
  
});

function Aloitus() {

    const tyylit = useStyles();

    return(
        <Container>
            <Typography
                    variant="h4" 
                    style={{
                        marginTop:20, 
                        marginLeft:260,
                        color:"#026635"}}
                >
                    Play or practice for
                </Typography>

                <Typography
                    variant="h3"
                    style={{
                        marginTop:30, 
                        marginLeft:270,
                        color:"white",
                        backgroundColor:"#026635",
                        width:210,
                        padding:10}}
                >
                    Breaking
                </Typography>

                <Typography
                    variant="h3"
                    style={{
                        marginLeft:315, 
                        marginTop:10,
                        color:"white",
                        backgroundColor:"#026635",
                        width:245,
                        padding:10}}
                >
                    Bad-game
                </Typography>

                <Button
                    component={Link}
                    to="/peli"
                    variant="outlined"
                    size="large"
                    className={tyylit.nappi}
                >
                    START GAME
                </Button>
                <Button
                    component={Link} 
                    to="/listaus"
                    variant="outlined"
                    size="large"
                    className={tyylit.nappi2}
                >
                    PRACTICE
                </Button>
        </Container>
    );
}

export default Aloitus;