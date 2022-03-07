import {useState} from 'react';

function Footer(props) {

    const [kuluvaVuosi, setKuluvaVuosi] = useState(new Date().getFullYear());
    
    return(
        
        <div 
            style={{
                    backgroundColor: "#a7dadb",
                    padding: "30px",
                    paddingLeft: "50px",
                    color: "#757575"
        }}
        >
            <div
                style={{
                    display: "inline-block",
                    
        }}
            >
                Yhteystiedot:<br/>
                Paitakuja 99<br/>
                99999 Helsinki<br/>
                +123 4567 8999
            </div>
            <div
                style={{
                    display: "inline-block",
                    margin: "20px",
                    float: "right"
        }}
            >© {kuluvaVuosi}</div>
            

        </div>
    );
}

export default Footer;