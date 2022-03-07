
function Tuotenostot(props) {
    return(
        <div
        style={{
            width: "800px",
            display: "inline-block",
            marginLeft: "15px",
            paddingTop: "10px",
            paddingBottom: "10px"
            
        }}>
            {props.children}
            </div>
    );
}

export default Tuotenostot;