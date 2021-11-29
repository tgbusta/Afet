import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import SocialMedia from "../Screens/SocialMedia";
import Welcome from "../Screens/Welcome";
const PublicLayout = () => (
  <div className="private-layout">
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/socialmedia" component={SocialMedia}/>
      <Route path="/welcome" component={Welcome} />
      <Redirect from="*" to="/welcome" />
    </Switch>
  </div>
);

export default PublicLayout;
