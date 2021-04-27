import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const listarPerfis = ({perfis}:any) => {
    
    const handleClose = () => {
        //console.log(props)
        //handleCloseAction();
    }
  
    return (
        <List>
            {perfis? (perfis.map((value:any) => (
                <ListItem button>
                    <ListItemText primary={value.nome} />
                </ListItem>
            ))  ): <></>}
            
        </List>
    )
  }
 export default listarPerfis; 