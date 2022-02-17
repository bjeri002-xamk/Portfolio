import { Button, Container, FormControl, InputLabel, MenuItem, Select, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";


function Peli (props) {

    const [henkilo1, setHenkilo1] = useState({});
    const [arvaus, setArvaus] = useState("");
    const [oikeatVastaukset, setOikeatvastaukset] = useState(0);
    const history = useHistory();
    const [oikein, setOikein] = useState("");

    const arvoHenkilo = () => {
        let henkilo1 = props.data.henkilot[Math.floor(Math.random()*props.data.henkilot.length)];
        
        setHenkilo1(henkilo1);
    }

    const tarkista = () => {
        if (arvaus === henkilo1.name) {
            let laskuri = oikeatVastaukset;
            laskuri++;
            setOikeatvastaukset(laskuri);
            setOikein("CORRECT!")
            arvoHenkilo();
        } else {
            history.push({pathname:"/tallenna", state:{details: oikeatVastaukset}})
            setOikeatvastaukset(0);
        }
    }

    useEffect(() => {
        arvoHenkilo();
    }, [])
    
    return(
        
        <Container maxWidth="sm">
            <Typography 
                variant="h4" 
                align="center" 
                style={{
                    margin:20,
                    color:"#026635"}}
            >
                Name character:
            </Typography>

            <img src={henkilo1.img} alt="henkilo1" style={{height:400,}}/>
                
                <FormControl 
                    style={{ 
                        marginTop:15, 
                        marginBottom: 15
                        }}
                >

                    <InputLabel style={{marginLeft:10}}>Select character</InputLabel>

                    <Select
                        onChange={(e) => {setArvaus(e.target.value)}}
                        value={arvaus}
                        style={{width:550}}
                        variant="outlined">
                            {props.data.henkilot.map((henkilo,name) => {
                                return(
                                    <MenuItem 
                                        key={name} 
                                        value={henkilo.name} 
                                        style={{
                                            backgroundColor:"#026635", 
                                            color:"white"}}
                                        >
                                        {henkilo.name}
                                    </MenuItem>
                                );
                            })}
                    </Select>
                </FormControl>

                <Typography 
                    variant="h6"
                    style={{color:"#026635"}}
                >
                    Score: {oikeatVastaukset}
                </Typography>
                <Typography 
                    variant="h4"
                    style={{color:"#29773E"}}
                >
                    {oikein}
                </Typography>
                       
                <Button 
                    onClick={tarkista} 
                    variant="outlined" 
                    size="large" 
                    fullWidth
                    style={{
                        marginTop: 15,
                        backgroundColor:"#026635", 
                        color:"white",
                        }}
                    >
                        Check
                </Button>

        </Container>
    );}


export default Peli;