import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Dialog, Paper } from "@material-ui/core";
import CadastrarPerfil from './cadastrar.perfil';
import ListarPerfis from './lista.perfil';
import { listAllUsers } from '../../analise/user.service';
import { listAllProfiles } from '../../analise/profile.service';
import { getLoggedUser } from '../../infra/auth';

const useStyles = makeStyles((theme) => ({
    
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  }));

export function Profile() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const [open, setOpen] = React.useState(false);

    const [users,setUsers] = React.useState([]);
    const [profiles,setProfiles] = React.useState([]);
    useEffect(() => {
      console.log("só uma vezsinha")
        listAllUsers().then(result => {
            setUsers(result);
        })
        listAllProfiles(getLoggedUser().id).then(result => {
          console.log(result)
            setProfiles(result)
        })
    },[]);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return(
        <Container maxWidth="lg" className={classes.container}>
            <Button variant="contained" color="primary" onClick={() => handleClickOpen()}>
                Novo
            </Button>
            <Paper>
                <ListarPerfis perfis={profiles}></ListarPerfis>
            </Paper>
            

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <CadastrarPerfil handleCloseAction={handleClose} users={users}></CadastrarPerfil>    
            </Dialog>
        </Container>
        
    )
}