import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Alert } from '@material-ui/lab';
import { ProductShoppingListDTO } from '../../dto/product/product.shopping.list';


interface AddShoppingListItemState{
    nomePerfil: string,
    showError:boolean
}
const AddShoppingListItem = ({products,handleCloseAction,handleAddItem}:any) => {
    const [productName,setProductName] = React.useState("");
    const [quantity,setQuantity] = React.useState(0);
    const [showError,setShowError] = React.useState(false);
   

    const handleClose = () => {
        handleCloseAction();
    };
    const handleSave = () => {
      if(productName.length > 0){
        
        let newShoppingListItem = {
            id:98,
            name:productName,
            codigo:"",
            ncm:"",
            previousPrice:0.0,
            quantity:quantity,
            bought:false,
          
        } as ProductShoppingListDTO;
        handleAddItem(newShoppingListItem);
        handleClose();
        
      }else{
        setShowError(true)
      }
      
    }
    return (
      <div>
    
        
          <DialogTitle id="form-dialog-title">Criar novo perfil</DialogTitle>
          <DialogContent>
           {showError? <Alert variant="filled"  severity="error">Nome inválido ou quantidade de produtos inválida</Alert> :<></>} 
            {/* <DialogContentText>
              Crie o perfil e adicione pessoas. O nome do perfil deve ser preferencialmente algo que relacione as compras entre si.
            </DialogContentText> */}
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nome do Produto"
              type="text"
              fullWidth
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <div className="row">
                <div className="col-12">
                    <TextField
                        autoFocus
                        margin="dense"
                        id="quantity"
                        label="Quantidade"
                        type="number"
                        fullWidth
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                    />
                </div>
                
            </div>
            
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose()} color="default">
              Cancelar
            </Button>
            <Button onClick={() => handleSave()} color="primary" variant="contained">
              Adicionar
            </Button>
          </DialogActions>
        
      </div>
    );
  }
 export default AddShoppingListItem; 


// class AddShoppingListItem extends React.Component<any,AddShoppingListItemState> {
    
//     constructor(props:any){
//         super(props)
//         this.state = {nomePerfil: "",showError:false};
//     }
//     componentDidMount(){
//         //this.setState({nomePerfil: "",showError:false});
//     }

//     handleClose(){
//         this.props.handleCloseAction();
//     };
//     handleSave(){
//         console.log(this)
//       if(this.state.nomePerfil.length > 0){
        
//         let newShoppingListItem = {
//             id:98,
//             name:this.state.nomePerfil,
//             codigo:"",
//             ncm:"",
//             previousPrice:0.0,
//             quantity:0,
//             bought:false,
          
//         } as ProductShoppingListDTO;
//         this.props.handleAddItem(newShoppingListItem);
//         //products.push(newShoppingListItem);
//         this.handleClose();
        
//       }else{
//         this.props.setShowError(true)
//       }
      
//     }
//     render(){
//         return (
//             <div>
          
              
//                 <DialogTitle id="form-dialog-title">Criar novo perfil</DialogTitle>
//                 <DialogContent>
//                  {this.state.showError? <Alert variant="filled"  severity="error">Nome inválido ou quantidade de participantes insuficiente</Alert> :<></>} 
//                   <DialogContentText>
//                     Crie o perfil e adicione pessoas. O nome do perfil deve ser preferencialmente algo que relacione as compras entre si.
//                   </DialogContentText>
//                   <TextField
//                     autoFocus
//                     margin="dense"
//                     id="name"
//                     label="Nome do perfil"
//                     type="text"
//                     fullWidth
//                     value={this.state.nomePerfil}
//                     onChange={(e) => this.setState({nomePerfil:e.target.value})}
//                   />
//                 </DialogContent>
//                 <DialogActions>
//                   <Button onClick={() => this.handleClose()} color="default">
//                     Cancelar
//                   </Button>
//                   <Button onClick={() => this.handleSave()} color="primary" variant="contained">
//                     Criar
//                   </Button>
//                 </DialogActions>
              
//             </div>
//           )
//     }
    
//   }
//  export default AddShoppingListItem; 