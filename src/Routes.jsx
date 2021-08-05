import React from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import {BuysDashboard} from '../src/modules/dashboard/BuysDashboard'
import {Profile} from '../src/modules/profile/profile'
import { ManageBuys } from "./modules/Buy/ManageBuys";
import { ProductDashboard } from "./modules/product/ProductDashboard";
//import ShoppingList from "./modules/shopping-list/ShoppingList";
import { ShoppingList } from "./modules/shopping-list/ShoppingList";

function Routes() {
    return (
       
            <Switch>
                <Route path="/" exact component={BuysDashboard}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/product" component={ProductDashboard}/>
                <Route path="/buys" component={ManageBuys}/>
                <Route path="/shopping-list" component={ShoppingList}/>
                {/* <Route component={NotFound}/> */}
            </Switch>
       
    )
}
export default Routes;