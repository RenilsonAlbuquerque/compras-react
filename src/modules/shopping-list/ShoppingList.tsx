import { Card, CardContent, Checkbox, Typography, Dialog, Button, InputLabel, Select } from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import { DeleteSweep} from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import React, { useEffect } from "react";
import { listAllProfiles } from "../../analise/profile.service";
import { clearShoppingCart, getCartById, getCartSugestionById, saveShoppingCart } from "../../analise/shoppingcart.service";
import { ProductShoppingListDTO } from "../../dto/product/product.shopping.list";
import { ProfileDetailDto } from "../../dto/profile/profile.detail";
import { getLoggedUser } from "../../infra/auth";
import AddShoppingListItem from "./AddShoppingListItem";
import ConfirmationDialog from "./modals/ConfirmationDialog";


import './shoppingList.css';


interface ShopingListState{
    products:ProductShoppingListDTO[], 
    open: boolean,
    selectedProfile:ProfileDetailDto,
    profiles:ProfileDetailDto[],
    confirmDeleteDialog :boolean,
    confirmDeleteItemDialog: boolean
}

export class ShoppingList extends React.Component<any,ShopingListState>{
    
    constructor(props:any) {
        super(props);
        this.state = {
            products:[],
            open:false,
            profiles:[],
            selectedProfile:{} as ProfileDetailDto,
            confirmDeleteDialog : false,
            confirmDeleteItemDialog:false
        }
    }
    componentWillMount(){
        listAllProfiles(getLoggedUser().id).then((result:any) => {
            if(result.length > 0){
                this.setState({...this.state,profiles:result,selectedProfile:result[0]})
                getCartById(this.state.selectedProfile.id)
                    .then(cartResult => {
                        this.setState({...this.state,products:cartResult})
                    })
            }
          })
        
    }
    componentWillUnmount(){
        this.handleSave();
    }
    handleClearList(){
        
        clearShoppingCart(this.state.selectedProfile.id)
        .then(resultado => {
            this.setState({products:[],open:false})
        })
        
    }
    
    handleGetSugestion(){
        getCartSugestionById(this.state.selectedProfile.id)
        .then(resultado => {
            console.log(resultado);
        })
    }
    handleClickOpen() {
        this.setState({...this.state,open:true})
    };
    handleClose = () => {
        this.setState({...this.state,open:false})
    };

    ///------------Entire list---------------
    handleCheckIfClearListConfirmDialogDeletIsOpen = () => {
        return this.state.confirmDeleteDialog
    }
    handleOpenClearListConfirmationDialog = () =>{
        this.setState({...this.state,confirmDeleteDialog:true})
    }
    handleCloseClearListConfirmationDialog = () => {
        this.setState({...this.state,confirmDeleteDialog:false})
    };
    handleClearListAndCloseConfirmationDialog = () =>{
        this.handleClearList();
        this.handleCloseClearListConfirmationDialog();

    }
    //--------------Single Item---------------
    handleCheckIfItemDeletIsOpen = () => {
        return this.state.confirmDeleteItemDialog
    }
    handleOpenDeletItemConfirmationDialog = () =>{
        console.log("Entrou na mudança de estado")
        this.setState({...this.state,confirmDeleteItemDialog:true})
    }
    handleCloseDeletItemConfirmationDialog = () => {
        this.setState({...this.state,confirmDeleteItemDialog:false})
    };
    handleRemoveItemAndCloseDialog = (itemIndex:number) =>{
        this.handleRemoveItem(itemIndex);
        this.handleCloseDeletItemConfirmationDialog()
    } 
    
    handleAddItem = (item:ProductShoppingListDTO) =>{
        this.state.products.push(item)
        this.setState({...this.state,products:this.state.products})     
    }
    handleRemoveItem = (itemIndex:number) => {
        this.state.products.splice(itemIndex, 1);
        this.setState({...this.state,products:this.state.products})   
    }
    //--------------
    handleChange(event:any,index:number){
        this.state.products[index].bought = !this.state.products[index].bought;
        this.setState({...this.state,products:this.state.products})               
    }
    
    handleSave(){
        saveShoppingCart(this.state.products,this.state.selectedProfile.id)
        .then(resultado => {
            //console.log(resultado)
        })
    }
    
    render(){
        return(
            <React.Fragment>
                <div className="cartHeader row">
                    <div className="col-sm-12 col-lg-4">
                        <InputLabel htmlFor="age-native-simple">Perfil</InputLabel>
                        <Select
                            style={{width:'100%'}}
                            native
                            inputProps={{
                                name: 'age',
                                id: 'age-native-simple',
                                }}>
                            {(this.state.profiles && this.state.profiles.length > 0 )?  (this.state.profiles.map((row:any) => (
                                <option  key={row.id} value={row.id}>{row.nome}</option>
                            )))
                            : <></>}
                        </Select>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <Button variant="outlined" onClick={() => this.handleOpenClearListConfirmationDialog()}
                            style={{backgroundColor:'#f44336'}}>
                            <DeleteSweep/>
                            Limpar a lista
                        </Button>
                        <Button variant="outlined" onClick={() => this.handleGetSugestion()}
                            style={{backgroundColor:'#ffee33'}}>
                            Obter sugestão
                        </Button>
                    </div>
                    
                </div>
                <div style={{padding:"1em"}}>
                    {(this.state.products.map((product:ProductShoppingListDTO,index:number) => (
                        <Card variant="outlined" key={index} 
                            style={product.bought ? {backgroundColor:"#a2cf6e"}:{backgroundColor:"white"} }
                        >
                            <CardContent className="row">
                                <div className="col-10" style={{textAlign:"left"}}>
                                    <Typography component="h2" variant="h6" color="primary"  gutterBottom>
                                        {product.name}
                                    </Typography>
                                    <Typography color="textSecondary" gutterBottom>
                                        Quantidade: {product.quantity}
                                    </Typography>
                                    <Typography color="textSecondary" gutterBottom>
                                        Preço anterior: {product.previousPrice}
                                    </Typography>
                                </div>
                                <div className="col-2">
                                    <Checkbox
                                        checked={product.bought}
                                        className="col-1"  
                                        onChange={(event) => this.handleChange(event,index)}
                                        name="Valor"
                                        color="primary"
                                    />
                                    <Button
                                        className="col-1"  
                                        onClick={(event) => this.handleOpenDeletItemConfirmationDialog()}
                                        name="delete"
                                        color="secondary"
                                        variant="contained"
                                        style={{minWidth:'25px'}}
                                    >X</Button>
                                     {/** */}
                                     <ConfirmationDialog
                                        props={{ 
                                            isOpen: this.handleCheckIfItemDeletIsOpen(),
                                            handleClose: this.handleCloseDeletItemConfirmationDialog,
                                            title: "Deletar item",
                                            message: "Tem certeza que deseja deletar este item?",
                                            handleConfirm: this.handleRemoveItemAndCloseDialog,
                                            params: index
                                        }}
                                     ></ConfirmationDialog>
                                </div> 
                                
                            </CardContent>
                        </Card>
                    )) )}
                </div>
                <Fab color="primary" aria-label="add" onClick={() => this.handleClickOpen()} className="fixedButton">
                    <AddIcon />
                </Fab>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <AddShoppingListItem
                        profileId={this.state.selectedProfile.id} 
                        handleCloseAction={this.handleClose} 
                        products={this.state.products} 
                        handleAddItem={this.handleAddItem}></AddShoppingListItem>
                </Dialog>
                <ConfirmationDialog
                    props={{ 
                        isOpen: this.handleCheckIfClearListConfirmDialogDeletIsOpen(),
                        handleClose: this.handleCloseClearListConfirmationDialog,
                        title: "Deletar",
                        message: "Tem certeza que deseja deletar toda a lista mesmo?",
                        handleConfirm: this.handleClearListAndCloseConfirmationDialog,
                        params: []
                    }}
                ></ConfirmationDialog>
               
            </React.Fragment>
            
        )
    }
}