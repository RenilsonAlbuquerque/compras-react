import { Card, CardContent, Checkbox, Typography, Dialog, makeStyles, Button, InputLabel, Select } from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import { DeleteSweep } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import React, { useEffect } from "react";
import { listAllProfiles } from "../../analise/profile.service";
import { clearShoppingCart, getCartById, saveShoppingCart } from "../../analise/shoppingcart.service";
import { ProductShoppingListDTO } from "../../dto/product/product.shopping.list";
import { ProfileDetailDto } from "../../dto/profile/profile.detail";
import { getLoggedUser } from "../../infra/auth";
import AddShoppingListItem from "./AddShoppingListItem";
import './shoppingList.css';


interface ShopingListState{
    products:ProductShoppingListDTO[], 
    open: boolean,
    selectedProfile:ProfileDetailDto,
    profiles:ProfileDetailDto[]
}

export class ShoppingList extends React.Component<any,ShopingListState>{
    
    constructor(props:any) {
        super(props);
        this.state = {
            products:[],
            open:false,
            profiles:[],
            selectedProfile:{} as ProfileDetailDto
        }
    }
    componentWillMount(){
        listAllProfiles(getLoggedUser().id).then((result:any) => {
            if(result.length > 0){
                this.setState({...this.state,profiles:result,selectedProfile:result[0]})
                getCartById(this.state.selectedProfile.id)
                    .then(cartResult => {
                        console.log(cartResult);
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
            //console.log(resultado)
        })
        
    }
    handleClickOpen() {
        this.setState({...this.state,open:true})
    };
    handleClose = () => {
        this.setState({...this.state,open:false})
    };
    handleChange(event:any,index:number){
        this.state.products[index].bought = !this.state.products[index].bought;
        this.setState({...this.state,products:this.state.products})               
    }
    handleAddItem = (item:ProductShoppingListDTO) =>{
        this.state.products.push(item)
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
                        <Button variant="outlined" onClick={() => this.handleClearList()}>
                            <DeleteSweep/>
                            Limpar a lista
                        </Button>
                    </div>
                    
                </div>
                <div style={{padding:"1em"}}>
                    {(this.state.products.map((product:ProductShoppingListDTO,index:number) => (
                        <Card variant="outlined" key={index} 
                            style={product.bought ? {backgroundColor:"#a2cf6e"}:{backgroundColor:"white"} }
                        >
                            <CardContent className="row">
                                <div className="col-11" style={{textAlign:"left"}}>
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
                                <Checkbox
                                    checked={product.bought}
                                    className="col-1"  
                                    onChange={(event) => this.handleChange(event,index)}
                                    name="Valor"
                                    color="primary"
                                />
                            </CardContent>
                        </Card>
                    )) )}
                </div>
                <Fab color="primary" aria-label="add" onClick={() => this.handleClickOpen()} className="fixedButton">
                    <AddIcon />
                </Fab>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                        <AddShoppingListItem handleCloseAction={this.handleClose} products={this.state.products} handleAddItem={this.handleAddItem}></AddShoppingListItem>
                </Dialog>
            </React.Fragment>
            
        )
    }
}