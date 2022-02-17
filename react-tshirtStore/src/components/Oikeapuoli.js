function Oikeapuoli(props) {
    return(
        <div
            style={{
                    float:"right",
                    display: "inline-block",
                    width: "350px",
                    marginRight: "15px",
                    marginTop: "20px"
            }}>
            {props.children}
        </div>
    );
}

export default Oikeapuoli;