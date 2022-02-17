import { Container, Typography, } from '@material-ui/core';
import pilkki from '../kuvat/pilkki2.jpg';


function Aloitus() {
    
    return(
        <Container maxWidth="sm">
            <Typography
                align="center"
                color="secondary"
                style={{margin:5,fontSize:80}}
                >KEVÄTPILIKIT
            </Typography>

            <img 
                src={pilkki}
                alt="pilkkikuva" 
                style={{
                    width:"100%",
                    marginBottom:15
                }}
            />
                
                <Typography variant="h5" align="center">Lauantaina 13.3.2021<br/>
                            kello 9:00-13:00<br/>
                            Huruslahti, Varkaus<br/><br/>
                            Sarjat:<br/>
                            alle 15 vuotiaat<br/>
                            15 – 19 vuotiaat<br/>
                            20 – 39 vuotiaat<br/>
                            40 – 59 vuotiaat<br/>
                            60 – 69 vuotiaat<br/>
                            70 – 79 vuotiaat<br/>
                            yli 80 vuotiaat<br/>

                </Typography>
        </Container>
    );
}

export default Aloitus;