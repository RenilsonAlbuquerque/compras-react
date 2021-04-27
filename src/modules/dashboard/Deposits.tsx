import React from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './BaseTitle';



const resultsResume = ({props}: any) => {
  //const classes = useStyles();
  const calculateDate = () => {
    let now = new Date(Date.now())
    return `${now.getDay()}/${now.getMonth()}/${now.getFullYear()}`
  }
  return (
    <React.Fragment>
      <Title>Valor Total</Title>
      <Typography component="p" variant="h4">
        R$ {props? props.total: 0}
      </Typography>
      <Title>Valor ICMS</Title>
      <Typography component="p" variant="h4">
        R$ {props? props.taxation_icms: 0}
      </Typography>
      
      <Typography color="textSecondary">
        até {calculateDate()}
      </Typography>
      
    </React.Fragment>
  );
}
export default resultsResume;