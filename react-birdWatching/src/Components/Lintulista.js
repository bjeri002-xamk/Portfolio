import { Button, Container, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Lintulista(props) {
    return(
        <Container maxWidth="sm">

            <Typography variant="h3" align="center">Havaitut linnut</Typography>

            <List>
                {props.linnut.sort((a,b) => b.aika - a.aika).map((lintu, idx) => {
                    
                    return(
                        <ListItem key={idx} divider>
                            <ListItemText
                                primary={lintu.lintu}
                            />
                            <ListItemText
                                primary={lintu.paikka}
                            />
                            <ListItemText
                                primary={format(lintu.aika, "d.M.y HH:mm")}
                            />
                            <ListItemIcon>
                                <IconButton
                                    component={Link}
                                    to={`/muokkaalintua/${lintu.id}`}>
                                    <EditIcon/>
                                </IconButton>
                                <IconButton
                                    edge="end"
                                    component={Link}
                                    to={`/poistalintu/${lintu.id}`}
                                >
                                    <DeleteIcon/>
                                </IconButton>
                            </ListItemIcon>
                        </ListItem>
                    );
                })}
            </List>

            <Button
                component={Link}
                to="/uusilintu"
                fullWidth
                variant="contained"
                color="primary"
            >
                Lisää uusi lintu
            </Button>

        </Container>
    );
}

export default Lintulista;