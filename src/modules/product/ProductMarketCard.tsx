import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";



const useStyles = makeStyles({
    root: {
      minWidth: 275,
      textAlign:"left",
      borderLeft:"inset",
      background:"linear-gradient(45deg,#4099ff,#73b4ff)",
      color: "white"
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    cardLastPrice:{
        borderLeft:'5px solid green'
    },
    marketFont:{
        color:'lightgreen'
    },
    bottomFont:{
        fontSize:'1em'
    }
  });
const ProductMarketCard = ({props}: any) => {

    const classes = useStyles();
    const favoriteMarket = () =>{
        
    }
    return (
        
        <Card className={classes.root} style={{borderLeft:'5px solid purple'}} variant="outlined">
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    Estabelecimento preferido
                </Typography>
                <Typography variant="h5" component="h2" className={classes.marketFont}>
                    
                    {(props)? props[0].mercado: ""}
                </Typography>
                <Typography variant="h6" className={classes.bottomFont}>
                    Você compra este item nesse mercado em 99% das vezes
                </Typography>
            </CardContent>
        </Card>
      
    );
  }
  export default ProductMarketCard