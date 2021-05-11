import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    table: {
      height:'100%'
    },paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'hidden',
        flexDirection: 'column',
        borderLeft:'5px solid #007E33',
        background:'linear-gradient(45deg,#2ed8b6,#59e0c5)'
      },
    }));
 
  

  
const ProductHistoricTable = ({props}: any) => {

    const classes = useStyles();
  
    return (
        <Paper className={classes.paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Data </TableCell>
              <TableCell align="right">Estabelecimento</TableCell>
              <TableCell align="right">Preço unid.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props? (props.map((row:any,index:any) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.buyData}
                </TableCell>
                <TableCell align="right">{row.mercado}</TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
            ))  ): <></>}
          </TableBody>
        </Table>
        </Paper>
        
      
    );
  }
  export default ProductHistoricTable
  