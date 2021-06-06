import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Alert } from '@material-ui/lab';
import { InputLabel, Select } from '@material-ui/core';
import { ProfileDetailDto } from '../../dto/profile/profile.detail';
import { CreateNfce } from '../../dto/nfce/create.nfce.dto';
import { saveNfceByLink } from '../../analise/nfce.service';

const CreateBuy = ({profiles,handleCloseAction}:any) => {

    const [errorMessage,setErrorMessage] = React.useState("");
    const [linkNfce,setLinkNfce] = React.useState("");
    const [showError,setShowError] = React.useState(false);
    const [selectedProfile, setSelectedProfile] = React.useState(profiles[0] as ProfileDetailDto);

    const handleClose = () => {
        handleCloseAction();
    };
    const handleSave = () => {
      if(linkNfce.length > 0){
        
        let nfceCreateDto = {
          profileId:selectedProfile.id,
          link: linkNfce,
        } as CreateNfce;
        
        saveNfceByLink(nfceCreateDto).then(result => {
          handleCloseAction();
        }).catch( er => {
          console.log(er)
          setErrorMessage(er);
        })
      }else{
        setErrorMessage("Insira um link válido")
        setShowError(true)
      }
      
    }
    const handleChangeProfile = (event:any) => {
        
        console.log(event)
        // setSelectedProfile({
        //   ,
        // });
    };
    
  
    
   
    return (
      <div>
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open form dialog
        </Button> */}
        
          <DialogTitle id="form-dialog-title">Salvar nova NFCE</DialogTitle>
          <DialogContent>
           {showError? <Alert variant="filled"  severity="error">{errorMessage}</Alert> :<></>} 
            {/* <DialogContentText>
              Cole o link da nfce e
            </DialogContentText> */}
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Link da nota fiscal"
              type="text"
              fullWidth
              value={linkNfce}
              onChange={(e) => setLinkNfce(e.target.value)}
            />
            <div>
              <InputLabel htmlFor="age-native-simple">Perfil</InputLabel>
              <Select
                    variant="outlined"
                    style={{width:'100%'}}
                    native
                    value={selectedProfile.id}
                    onChange={handleChangeProfile}
                    label="Perfil"
                  >
                    {(profiles && profiles.length > 0 )?  (profiles.map((row:any) => (
                      <option  key={row.id} value={row.id}>{row.nome}</option>
                      )))
                      : <></>}
              </Select>
            </div>
            
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
 export default CreateBuy; 