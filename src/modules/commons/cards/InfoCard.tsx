import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Icon, makeStyles, Paper } from '@material-ui/core';
import * as React from 'react';


const useStyles = makeStyles((theme) => ({
    cardInfo:{
        border:'none',
        boxShadow:' 1px 0px 20px rgba(0, 0, 0, 0.05)',
    },
    cardInfoBody:{
        flex:'1 1 auto',
        padding: '1.25rem',
    }
}));


export const InfoCard = ({value,title,icon, color}:any) => {

    const classes = useStyles();

      return (
        <div className={classes.cardInfo} style={{backgroundColor:color}}>
            <div className={classes.cardInfoBody}>
                <div className="d-flex row">
                    <div className="col-3 align-self-center">
                        <Icon fontSize="large">{icon}</Icon>
                    </div>
                    <div className="col-8 ml-auto align-self-center text-center"> 
                        <h3>R$ {value}</h3>
                        <p>{title}</p>
                    </div>
                </div>
            </div>
        </div>
      );
}