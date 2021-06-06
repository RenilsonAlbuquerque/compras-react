import React, {useEffect} from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button, Grid, Select, TextField, Dialog } from '@material-ui/core';
import { ProfileDetailDto } from '../../dto/profile/profile.detail';
import { listAllProfiles } from '../../analise/profile.service';
import { getLoggedUser } from '../../infra/auth';
import { Autocomplete } from '@material-ui/lab';
import { ProductSearchDTO } from '../../dto/product/product.search.dto';
import { getProductAnalisis } from '../../analise/product.service';
import { ProductAnalisisDto } from '../../dto/product/product.analisis.dto';
import { ProductAnalisisSearchDto } from '../../dto/product/product.analisis.search.to';
import CreateBuy from './CreateBuy';
// import ProductResumes from './ProducResumes';
// import ProductTimelineChart from './ProductTimelineChart';
// import ProductHistoricTable from './ProductHistoricTable';
// import { getProductAnalisis, listAllProductsOfProfile } from '../../analise/product.service';
// import { ProductAnalisisSearchDto } from '../../dto/product/product.analisis.search.to';
// import { ProductAnalisisDto } from '../../dto/product/product.analisis.dto';
// import ProductMarketCard from './ProductMarketCard';

const useStyles = makeStyles((theme) => ({
    
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  }));

export function ManageBuys(){
  
    const classes = useStyles();
    //============Product analisis Properties=============//
    const [productAnalsis, setProductAnalisis] = React.useState({lastBuyValue:0,lastBuyDifference:0,unityMeanValue:0} as ProductAnalisisDto);

    //===============Product Properties===================//
    
    const [buys, setBuys] = React.useState([{id:0,name:"nome"}] as ProductSearchDTO[]);
    const [selectedProduct, setSelectedProduct] = React.useState({} as ProductSearchDTO);

    const handleChangeProduct = (product:any) => {
      if(product && product.ncm){
        let filterSearchDto = { profileId:selectedProfile.id, productNcm:product.ncm,productCode:product.codigo } as ProductAnalisisSearchDto
        setSelectedProduct(product)
        getProductAnalisis(filterSearchDto).then((analisisResult:ProductAnalisisDto) =>{
          setProductAnalisis(analisisResult)
        })
      }
      
    };

    //=====================Profile Properties==============//
  
    
    const [profiles, setProfiles] = React.useState([] as ProfileDetailDto[]);
    const [selectedProfile, setSelectedProfile] = React.useState({} as ProfileDetailDto);

    const handleChangeProfile = (event:any) => {
        
        console.log(event)
        // setSelectedProfile({
        //    event.target.value,
        // });
    };
    
    const [createOpen, setCreateOpen] = React.useState(false);
    const handleClickOpenCreateNFCE = () => {
      setCreateOpen(true);
    };
    const handleCloseCreateNFCE = () => {
      setCreateOpen(false);
    };
    //======================Call only once==================///
    useEffect(() => {
      
        listAllProfiles(getLoggedUser().id).then((profilesResult:ProfileDetailDto[]) => {
            setProfiles(profilesResult);
            if(profilesResult.length > 0){
                setSelectedProfile(profilesResult[0])
            }
        })
    },[]);

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Paper style={{padding:'12px', marginBottom:'12px'}}> 
              <Button onClick={handleClickOpenCreateNFCE} color="primary">
               +
              </Button>

            </Paper>
          {(selectedProduct && selectedProduct.id > 0) ? (
            <Grid container spacing={3}>
              
              {/* <Grid item xs={12} >
                <ProductResumes props={productAnalsis}></ProductResumes>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <ProductTimelineChart props={productAnalsis.productTimeLine}></ProductTimelineChart>
                </Paper>
              </Grid>
              <Grid item spacing={3} sm={12} lg={8}>
                <ProductHistoricTable props={productAnalsis.productTimeLine}></ProductHistoricTable>    
              </Grid>
              <Grid item spacing={3} sm={12} lg={4}>
                <ProductMarketCard ></ProductMarketCard>
              </Grid> */}

          </Grid>
          ):(<></>)}
          <Dialog open={createOpen} onClose={handleClickOpenCreateNFCE} aria-labelledby="form-dialog-title">
              <CreateBuy handleCloseAction={handleCloseCreateNFCE} profiles={profiles}></CreateBuy>    
          </Dialog>
        </Container>
    )
}