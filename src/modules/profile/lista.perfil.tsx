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
            {(perfis && perfis.length > 0)? (perfis.map((value:any) => (
                <ListItem key={value.id} button>
                    <ListItemText primary={value.nome} />
                </ListItem>
            ))  ): <></>}
            
        </List>
    )
  }
 export default listarPerfis; 