import React, { Component } from "react";
import './App.css';
import NavBar from './components/navBar';
import { Button, Form, FormGroup, Label, Input }
  from "reactstrap";

import { FacebookLoginButton } from 'react-social-login-buttons';

class App extends Component {
  render() {
    return (
      <div >
        <NavBar/>
        <br/>
        <h1 className="font-weight-bold">MySite</h1>         
        <br/>  
      <Form className="login-form border border-secondary">
     
        <h3 className="text-center">Login</h3>
        <br/>
        <FormGroup>
         <Label>Email  </Label>              
          <input type="email" placeholder="Email"/>
        </FormGroup>
        <FormGroup>
          <Label>Password  </Label>
          <input type="password" placeholder="Password"/>
        </FormGroup>
        <Button className="btn-primary btn-lg btn-block">          
          Log in
        </Button>
        <div className="text-center pt-3">
          Or Login with your Social Media Account
        </div>
         <FacebookLoginButton className="mt-2 mb-3"/>
         <div className="text-center pt-3">
           <a href="/sign-up">Sign up</a>
           <span className="p-2">|</span>
           <a href="/forgot-password">Forgot Password?</a>
         </div>
       </Form>
       </div>
    );
  }
}
export default App;
