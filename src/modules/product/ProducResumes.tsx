import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      textAlign:"left",
      borderLeft:"inset"
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
  });
const ProductResumes = ({props}: any) => {
    const classes = useStyles();
    return (
        <div className="row">
            <div className="col-sm-12 col-lg-4">
                <Card className={classes.root} variant="outlined" >
                    <CardContent >
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Valor da última compra
                        </Typography>
                        <Typography variant="h5" component="h2">
                            R$ {props.lastBuyValue.toFixed(2)}
                        </Typography>
       
                    </CardContent>
                </Card>
            </div>
            <div className="col-sm-12 col-lg-4">
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Duração média da unidade
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {Math.round(props.unityMeanValue)} {(Math.abs(Math.round(props.unityMeanValue)) == 1)? "dia": "dias"}
                        </Typography>
       
                    </CardContent>
                </Card>
            </div>
            <div className="col-sm-12 col-lg-4">
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Diferença da ultima compra
                        </Typography>
                        <Typography variant="h5" component="h2">
                            R$ {props.lastBuyDifference.toFixed(2)}
                        </Typography>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}
export default ProductResumes