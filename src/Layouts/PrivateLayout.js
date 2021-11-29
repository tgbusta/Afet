import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import HomeScreen from "../Screens/HomeScreen";
import AidScreen from "../Screens/AidScreen";
import DonationScreen from "../Screens/DonationScreen";
import RegionScreen from "../Screens/RegionScreen";
import UserScreen from "../Screens/UserScreen";
import { Container } from "react-bootstrap";
import NotFound from "../Screens/NotFound"

const PrivateLayout = () => {
 
return (
    <div>
 
    
      <Container className="shadow p-3 mb-5 rounded" >
        <Switch>
        <Route path="/home" component={HomeScreen} exact />
         <Route path="/aids" component={AidScreen} />
          <Route path="/donations" component={DonationScreen} />
          <Route path="/regions" component={RegionScreen} />
          <Route path="/users" component={UserScreen} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    
     
    </div>
  );
};


export default PrivateLayout;
