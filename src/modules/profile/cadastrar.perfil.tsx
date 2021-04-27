import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { saveNewProfile } from '../../analise/profile.service';
import { ProfileCreateDto} from '../../dto/profile/profile.create'
import { Alert } from '@material-ui/lab';
import { IdNomeDto } from '../../dto/comons/IdNome';

const CadastrarPerfil = ({users,handleCloseAction}:any) => {
    const [nomePerfil,setNomePerfil] = React.useState("");
    const [participantes,setParticipantes] = React.useState([] as IdNomeDto[]);
    const [showError,setShowError] = React.useState(false);

    const handleClose = () => {
        handleCloseAction();
    };
    const handleSave = () => {
      if(nomePerfil.length > 0 && participantes.length > 0){
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
      }else{
        setShowError(true)
      }
      
    }
    const listUsersId = (participantes:any) => {
      let result:number[] = [];
      participantes.forEach((participante:any) =>{
        result.push(participante.id) 
      })
      return result;
    }
    const blankValue:IdNomeDto[] = [
      {id:-1,nome:'none'}
    ] as IdNomeDto[]
    const defaultOption = (users.lenght > 0) ? users[0] as IdNomeDto : blankValue[0] as IdNomeDto
    
    let peopleChips = (
      <Autocomplete
        style={{paddingTop:'12px'}}
        multiple
        id="tags-outlined"
        options={users}
        getOptionLabel={(option) => option.nome}
        defaultValue={[defaultOption]}
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
           {showError? <Alert variant="filled"  severity="error">Nome inválido ou quantidade de participantes insuficiente</Alert> :<></>} 
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