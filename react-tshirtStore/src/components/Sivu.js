function Sivu(props) {
    return(
        <div style={{
                        margin: "10px",
                        fontFamily: "'Arial', 'Helvetica', sans-serif",
                        maxWidth: "1200px",
                        backgroundColor: "#ededed"
        }}>
            {props.children}
        </div>
    );
}

export default Sivu;