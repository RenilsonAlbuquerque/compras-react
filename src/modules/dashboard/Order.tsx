import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './BaseTitle';
import Modal from '@material-ui/core/Modal';
import BuyDetail from '../Buy/ByuDetails';
import { getNfceOvreviewById } from '../../analise/nfce.service';
import { NfceOverviewDto } from '../../dto/buy/nfce.overview.dto';

// Generate Order Data
function createData(id:any, date:any, name:any, shipTo:any, paymentMethod:any, amount:any) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event:any) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow:"auto",
  },
  paper: {
    width: '70vw',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    
  },
}));

const Buys = ({props}:any) =>  {
  const [currentNfce, setCurrentNfce] = React.useState({} as NfceOverviewDto)
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let handleSearchBuyDetails = (nfceId:number) => {
    getNfceOvreviewById(nfceId).then((result:any) => {
      //console.log(result)
      setCurrentNfce(result);
      handleOpen()
      //setChartData(result);
    });
  }
  return (
    <React.Fragment>
      <Title>Compras recentes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>ICMS</TableCell>
            <TableCell  align="right">Mercado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props? (props.map((row:any) => (
            <TableRow key={row.idCompra} onClick={() => handleSearchBuyDetails(row.idCompra)}>
              <TableCell>{row.data}</TableCell>
              <TableCell>{row.total}</TableCell>
              <TableCell>{row.icms}</TableCell>
              <TableCell align="right">{row.mercado}</TableCell>
            </TableRow>
          ))  ): <></>}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div> */}

      <Modal className={classes.modal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <BuyDetail props={currentNfce}></BuyDetail>
        </div>
        
      </Modal>
    </React.Fragment>
  );
}
export default Buys;