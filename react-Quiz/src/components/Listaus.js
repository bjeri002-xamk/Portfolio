import { Container, Grid, Typography, Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Listaus(props) {

   
    return(

        <Container maxWidth="md" >

            <Typography 
                variant="h5" 
                align="center" 
                style={{
                    marginTop:20, 
                    color:"#026635"}}
            >
                Click character for more info.
            </Typography>

            <Grid container justify="center">
                {props.data.henkilot.map((henkilo, char_id) => {
                    return(
                        <Grid item xs={4} key={char_id}>
                            <Avatar 
                                variant="square"
                                style={{
                                    width:250, 
                                    height:300, 
                                    margin:25,
                                    backgroundColor:"white"}} 
                                component={Link} 
                                to={`/henkilotiedot/${henkilo.char_id}`}
                            >
                                <img src={henkilo.img} style={{height:350, marginTop:40}} alt="Kuva"/>
                            </Avatar>
                        </Grid>
                    );
                })}
                        
            
                
            </Grid>
        </Container>
    );
    
}

export default Listaus;