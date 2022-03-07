function Pikaostoskori(props) {

    
    return(
        (props.summa === 0)
        ?   <div
                style={{
                    backgroundColor:"#a7dadb",
                    borderRadius: "10px",
                    textAlign: "center",
                    display: "inline-block",
                    marginTop: "20px",
                    padding: "30px",
                    width: "290px"
                }}>

                Ostoskorissa ei ole tuotteita.
        
            </div>
        :   
            (props.kirjaudu)
            ?
            <div
                style={{
                    backgroundColor:"#a7dadb",
                    borderRadius: "10px",
                    textAlign: "center",
                    display: "inline-block",
                    marginTop: "20px",
                    padding: "30px",
                    width: "290px"
                }}>
                Ostoskorissa on {props.paidatLkm} tuotetta, loppusumma {props.summa} euroa.
                <br/><br/>Hinta alennuksien jälkeen: {(props.summa * 0.8).toFixed(2)}
                <br/>
                <button
                    style={{
                            marginTop: "10px"
                    }}
                    onClick= { () => {
                        alert("Jatketaan tilaukseen...")
                    }}
                >Tilaa tuotteet</button>
            </div>
            :
            <div
                style={{
                    backgroundColor:"#a7dadb",
                    borderRadius: "10px",
                    textAlign: "center",
                    display: "inline-block",
                    marginTop: "20px",
                    padding: "30px",
                    width: "290px"
                }}>
                Ostoskorissa on {props.paidatLkm} tuotetta, loppusumma {props.summa} euroa.
                <br/>
                <button
                    style={{
                            marginTop: "10px"
                    }}
                    onClick= { () => {
                        alert("Jatketaan tilaukseen...")
                    }}
                >Tilaa tuotteet</button>
            </div>
            
    );
}

export default Pikaostoskori;