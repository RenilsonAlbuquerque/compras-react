import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { saveNewProfile } from '../../analise/profile.service';

const CadastrarPerfil = ({users,handleCloseAction}:any) => {
    
    const handleClose = () => {
        handleCloseAction();
    };
    const handleSave = () => {
      // saveNewProfile().then(result => {
      //   handleCloseAction();
      // })
    }
    const defaultUsers = [
      { id: 99, nome:'Josivaldo' }
    ];
  
    let peopleChips = (
      <Autocomplete
        style={{paddingTop:'12px'}}
        multiple
        id="tags-outlined"
        options={users}
        getOptionLabel={(option) => option.nome}
        defaultValue={[defaultUsers[0]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Pessoas"
            placeholder=""
          />
        )}
      />
    )
    return (
      <div>
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open form dialog
        </Button> */}
        
          <DialogTitle id="form-dialog-title">Criar novo perfil</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Crie o perfil e adicione pessoas. O nome do perfil deve ser preferencialmente algo que relacione as compras entre si.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nome do perfil"
              type="text"
              fullWidth
            />
            {peopleChips}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="default">
              Cancelar
            </Button>
            <Button onClick={handleSave} color="primary" variant="contained">
              Criar
            </Button>
          </DialogActions>
        
      </div>
    );
  }
 export default CadastrarPerfil; 