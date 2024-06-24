import React, { Component } from 'react';
import { Route, useHistory, withRouter } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import Home from './Home';
import SignIn from './SignIn';
import Protected from './Protected';

export default withRouter(class AppWithRouterAccess extends Component {

  constructor(props) {
    super(props);
    this.onAuthRequired = this.onAuthRequired.bind(this);
    
    this.oktaAuth = new OktaAuth({
      issuer: "https://dev-21501745.okta.com/oauth2/default",
      clientId: "0oa2yynmptDXcaobB5d7",
      redirectUri: "http://localhost:8080/unifiedhostingapi/redirect-sso",
      onAuthRequired: this.onAuthRequired,
      pkce: true
    });

    // this.oktaAuth = new OktaAuth({
    //   issuer: "https://consumer-pepsico.oktapreview.com/oauth2/ausrloxoabq9JEmaf0h7",
    //   clientId: "0oa13hy0kqgLJp2ZD0h8",
    //   redirectUri: "https://consumerhost.spo.nonprod.wspdop.pepsico.com/login/callback",
    //   onAuthRequired: this.onAuthRequired,
    //   pkce: true
    // })
   
  }

  onAuthRequired() {
    this.props.history.push('/login');
  }

  async restoreOriginalUri(_oktaAuth, originalUri) {
    
   window.location.href= window.location.origin+"/";
  };

  render() {
    
    return (
    <Security oktaAuth={this.oktaAuth} restoreOriginalUri={this.restoreOriginalUri}>
        <Route path='/' exact={true} component={Home} />
        <SecureRoute path='/protected' component={Protected} />
        <Route path='/login' render={() => <SignIn />} />
         <Route path='/login/callback' component={LoginCallback} /> 
      </Security>
    );
  }
});
