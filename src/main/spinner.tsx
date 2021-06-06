import { CircularProgress } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import  singletonInstance  from "../context/main/singleton.spinner";
import { reducer,initialState } from "../context/main/spinner.redux";

const useStyles = makeStyles((theme) => ({
    root: {
      zIndex:999,
      width:'100vw',
      height:'100vh',
      position:'fixed',
      top:0,
      opacity:'0.6',
      backgroundColor:'black'
    },
    spinner:{
        width:'20vh',
        height: '20vh',
        position: 'relative',
        top: '50vh'
    }
}))
export default function BaseSpinner() {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    const classes = useStyles();    
    
    if(singletonInstance.getSpinnerState()){
        return (
            <div className={classes.root}>
                <CircularProgress className={classes.spinner}/>
            </div>)
    }else{
        return (<></>)
    }
}