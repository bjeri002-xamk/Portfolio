import {useState} from 'react';

function Kirjautuminen(props) {

    const [tunnus, setTunnus] = useState("");
    const [salasana, setSalasana] = useState("");

    

    return(
        (props.kirjaudu)
        ?
            <div
            style={{
                backgroundColor:"#a7dadb",
                borderRadius: "10px",
                width: "350px",
                float: "right",
                display: "inline-block",
                textAlign: "center",
                paddingTop: "30px",
                paddingBottom: "30px"
        }}>
                Olet kirjautunut sisään tunnuksella: {tunnus}.
                <button
                    style = {{
                        padding: "7px",
                        marginTop: "7px"
                    }}
                    onClick= { () => {
                        props.tarkistaKirjautuminen("","");
                    }}
                    >Kirjaudu ulos</button>
            </div>
        :    
            <div
                style={{
                    backgroundColor:"#a7dadb",
                    borderRadius: "10px",
                    width: "350px",
                    float: "right",
                    display: "inline-block",
                    textAlign: "center",
                    paddingTop: "30px",
                    paddingBottom: "30px"
                }}
            >
                <input
                    placeholder= "Käyttäjätunnus.."
                    type= "text"
                    style = {{
                        padding: "7px"
                    }}
                    onChange = {(e) => {
                        setTunnus(e.target.value);
                    }}
                ></input>
                <br/>
                <input
                    placeholder= "Salasana.."
                    type="password"
                    style = {{
                        padding: "7px",
                        marginTop: "7px"
                    }}
                    onChange = {(e) => {
                        setSalasana(e.target.value);
                    }}
                ></input>
                <br/>
                <button
                    style = {{
                        padding: "7px",
                        marginTop: "7px"
                    }}
                    onClick = { () => {
                        props.tarkistaKirjautuminen(tunnus, salasana);
                    }}>
                    Kirjaudu sisään
                </button>
                <br/>
                
            </div>
    );
}

export default Kirjautuminen;