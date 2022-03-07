import harmaa from '../Kuvat/harmaa.png';
import valkoinen from '../Kuvat/valkoinen.png';
import vihrea from '../Kuvat/vihrea.png';
import keltainen from '../Kuvat/keltainen.png';
import sininen from '../Kuvat/sininen.png';
import musta from '../Kuvat/musta.png';

import {useState} from 'react';

function Tpaita(props) {

    const [paidat, setPaita] = useState([
        {
            nimi: "Harmaa t-paita",
            hinta: 15,
            kuva: harmaa,
        },
        {
            nimi: "Valkoinen t-paita",
            hinta: 10,
            kuva: valkoinen,
        },
        {
            nimi: "Vihreä t-paita",
            hinta: 14,
            kuva: vihrea,
        },
        {
            nimi: "Keltainen t-paita",
            hinta: 22,
            kuva: keltainen,
        },
        {
            nimi: "Sininen t-paita",
            hinta: 17,
            kuva: sininen,
        },
        {
            nimi: "Musta t-paita",
            hinta: 30,
            kuva: musta,
        }

]);


    return(
        (props.kirjaudu)
        ?
            <div>
            
            {paidat.map ((paita,idx) => {
                return(
                    
                <div key={idx}
                    style= {{
                        width: "200px",
                        borderRadius: "10px",
                        backgroundColor:"#a7dadb",
                        display: "inline-block",
                        padding: "15px",
                        margin: "10px",
                        marginLeft: "20px",
                        textAlign: "center",
                    }}
                >
                    {paita.nimi}<br/> {paita.hinta}e
                    <br/><br/>Alennettu hinta: {(paita.hinta * 0.8).toFixed(1)}e
                    <img 
                        src={paita.kuva} 
                        alt="harmaa"
                        style={{
                                width: "200px",
                                marginTop: "20px"
                        }}>
                    </img>
                    <button
                        style={{
                                marginTop: "10px",
                        }}
                        onClick= { () => {
                            props.lisaaPaidatLkm(paita.hinta);
                        }

                        }>Lisää ostoskoriin</button>
                </div>
                
                );
            })}
            
        </div>
        :
        <div>
            
            {paidat.map ((paita,idx) => {
                return(
                    
                <div key={idx}
                    style= {{
                        width: "200px",
                        borderRadius: "10px",
                        backgroundColor:"#a7dadb",
                        display: "inline-block",
                        padding: "15px",
                        margin: "10px",
                        marginLeft: "20px",
                        textAlign: "center",
                    }}
                >
                    {paita.nimi}<br/> {paita.hinta}e
                    <img 
                        src={paita.kuva} 
                        alt="harmaa"
                        style={{
                                width: "200px",
                                marginTop: "20px"
                        }}>
                    </img>
                    <button
                        style={{
                                marginTop: "10px",
                        }}
                        onClick= { () => {
                            props.lisaaPaidatLkm(paita.hinta);
                        }

                        }>Lisää ostoskoriin</button>
                </div>
                
                );
            })}
            
        </div>
    );
}

export default Tpaita;