import {  Dialog, Button,  DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";

const ConfirmationDialog = (props:any) => {

    const {isOpen,handleClose,title,message,handleConfirm,params} = props.props;
    
    return (
        <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="alert-dialog-title"> {title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Não</Button>
                    <Button onClick={(event) => handleConfirm(params) } autoFocus>Sim</Button>
                </DialogActions>
        </Dialog>  )
}
export default ConfirmationDialog;