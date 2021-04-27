import React from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import {BuysDashboard} from '../src/modules/dashboard/BuysDashboard'
import {Profile} from '../src/modules/profile/profile'

function Routes() {
    return (
       
            <Switch>
                <Route path="/" exact component={BuysDashboard}/>
                <Route path="/profile" component={Profile}/>
                {/* <Route component={NotFound}/> */}
            </Switch>
       
    )
}
export default Routes;