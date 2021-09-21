import React from 'react';

//import DashboardIcon from '@material-ui/icons/Dashboard';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import ListAltIcon from '@material-ui/icons/ListAlt';
// import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Icon from '@material-ui/core/Icon'
import {BrowserRouter as Router,Link} from "react-router-dom";
import { Button} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';


const sideBarItens = [
  {
    id: 1,
    title: "Dashboard",
    icon: "dashboard",
    path:"/",
   
  },
  {
    id: 2,
    title: "Perfis",
    icon: "people",
    path:"/profile"
  },
  {
    id: 3,
    title: "Produtos",
    icon: "shopping-cart",
    path:"/product",
    child:[
      {
        id: 4,
        title: "Produtos consumo",
        icon: "shopping-cart",
        path:"/product",
      }
    ]
  },
  {
    id: 5,
    title: "Compra",
    icon: "shoppingCart",
    path:"/buys",
    child:[
      {
        id: 6,
        title: "Registrar compra",
        icon: "shoppingCart",
        path:"/buys"
      },
      {
        id: 7,
        title: "Lista de compras",
        icon: "listAlt",
        path:"/shopping-list"
      }
    ]
  }
  
]

const createItensListStateController = () => {
  let result: any[] = [];
  sideBarItens.forEach(item =>{
    result.push(false);
  })
  return result;
}


export function MainListItems () {
  const [submenuState, setSubmenuState] = React.useState(createItensListStateController());
  const handleClickDropMenu = (itemIndex: number) => {
    let temporary = [...submenuState]; 
    temporary[itemIndex] = !temporary[itemIndex];
    setSubmenuState(temporary);
  }
  
  return (
    <div>
      {sideBarItens.map((item,index) => (
      <>
        {(item.child && item.child?.length > 0) ? (
           <List>
            <ListItemButton onClick={() => handleClickDropMenu(index)} >
             <ListItemIcon style={{color:'white'}}>
               <Icon>{item.icon}</Icon>
             </ListItemIcon>
             <ListItemText primary={item.title} />
             {submenuState[index] ? ( <ExpandLess />) : (<ExpandMore />)}
            </ListItemButton>
            <Collapse in={submenuState[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding style={{backgroundColor:'#4f5b62'}}>
                {item.child.map((subItem,subIndex) => (
                  <ListItem button component={Link} to={subItem.path} >
                    <ListItemIcon style={{color:'white'}}>
                      <Icon>{subItem.icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={subItem.title}  />
                  </ListItem>
                ))}
              </List>
            </Collapse>
         </List>
         
        ):(
       
          <ListItem button component={Link} to={item.path}>
          <ListItemIcon style={{color:'white'}}>
            <Icon>{item.icon}</Icon>
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItem>
        
      )}</>

    ))}
  </div> 
  )
}
export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);