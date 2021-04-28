import React from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './BaseTitle';



const resultsResume = ({props}: any) => {
  //const classes = useStyles();
  const calculateDate = () => {
    let now = new Date(Date.now())
    return `${now.getDate()}/${now.getMonth() +1}/${now.getFullYear()}`
  }
  return (
    <React.Fragment>
      <Title>Valor Total</Title>
      <Typography component="p" variant="h5">
        R$ {props? props.total: "0.00"}
      </Typography>
      <br></br>
      <Title>Valor ICMS</Title>
      <Typography component="p" variant="h5">
        R$ {props? props.taxation_icms: "0.00"}
      </Typography>
      <br></br>
      <Title>Total sem imposto</Title>
      <Typography component="p" variant="h5">
        R$ {props? props.total_product: "0.00"}
      </Typography>
      
      
      <Typography color="textSecondary">
        até {calculateDate()}
      </Typography>
      
    </React.Fragment>
  );
}
export default resultsResume;