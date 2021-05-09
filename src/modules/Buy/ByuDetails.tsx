import React from 'react';
import { List, ListItem, ListItemText, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    buyHeader:{
        width:'100%',
        height:'10%',
        position:'relative',
        top:0
    },
    container:{
        height:'90vh',
        //width: '50vw',
        position:'relative'
    },
    productList:{
        overflow:'auto',
        position:'absolute',
        height:'80%',
        width:'100%'
    },
    footer:{
        width:'100%',
        height:'10%',
        position:'absolute',
        bottom:0,
        textAlign:'right'
    },
    valueText:{
        textAlign:'right'
    }
}));
  

const BuyDetail = ({props}:any) =>  {
    const classes = useStyles();
    const buyData = new Date(props.nfceDate);
    console.log(props);
    const title = `Compras do dia ${buyData.getDay()}/${buyData.getMonth() + 1}/${buyData.getFullYear()}`
    return (
        
        <div className={classes.container}>
            <div className={classes.buyHeader}>
                <h3>{title}</h3>
            </div>
            <List component="nav" aria-label="main mailbox folders" className={classes.productList}>
                {props.products? (props.products.map((product:any) => (
                    <ListItem key={product.id} button>
                        <ListItemText primary={product.name} secondary={`Quantidade: ${product.quantity}`} />
                        <ListItemText className={classes.valueText} primary={`R$ ${product.value}`}></ListItemText>
                    </ListItem>
                ))  ): <></>} 
            </List>
            <div className={classes.footer}>
                <h4>Total: R$ {props.total}</h4>
            </div>
        </div>
    );
  }
  export default BuyDetail;