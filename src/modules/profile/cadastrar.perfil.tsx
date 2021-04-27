import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { saveNewProfile } from '../../analise/profile.service';
import { User } from '../../dto/auth/user';
import { ProfileCreateDto} from '../../dto/profile/profile.create'

const CadastrarPerfil = ({users,handleCloseAction}:any) => {
    const [nomePerfil,setNomePerfil] = React.useState("");
    const [participantes,setParticipantes] = React.useState([] as any[]);
    const handleClose = () => {
        handleCloseAction();
    };
    const handleSave = () => {
      console.log(nomePerfil)
      console.log(listUsersId(participantes));
      let profileCreateDto = {
        id:0,
        nome: nomePerfil,
        people: listUsersId(participantes)
      } as ProfileCreateDto;
      saveNewProfile(profileCreateDto).then(result => {
        console.log(result)
         handleCloseAction();
      })
    }
    const listUsersId = (participantes:any) => {
      let result:number[] = [];
      participantes.forEach((participante:any) =>{
        result.push(participante.id) 
      })
      return result;
    }
  
    let peopleChips = (
      <Autocomplete
        style={{paddingTop:'12px'}}
        multiple
        id="tags-outlined"
        options={users}
        getOptionLabel={(option) => option.nome}
        defaultValue={[users[0]]}
        filterSelectedOptions
        onChange={(event, value) => setParticipantes(value)} 
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
              value={nomePerfil}
              onChange={(e) => setNomePerfil(e.target.value)}
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