import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css';
  class Login extends React.Component{
    state={
        email:"",
        password:"",
        emailError:"",
        passwordError:""
    };
    handleChange=event=>{
        const isCheckbox= event.target.type==="checkbox";
        this.setState({
            [event.target.name]:isCheckbox
            ? event.target.checked
            :event.target.value
        });
    };
    validate=()=>{
      let  emailError ="";
    
      
      if( this.state.email<1) {
      emailError=" email can not be blank";    
      }
     
      else if( !this.state.email.includes('@')){
        emailError='invalid email';
    }
 
      if (emailError){
          this.setState({emailError});
          return false;
      }
      return true;

    };
    validation=()=>{
          
     let  passwordError ="";
        
        if( this.state.password<1) {
        passwordError=" password can not be blank";    
        }
       
         else if((this.state.password.length >1)&& (this.state.password.length<6)){
          passwordError ="password must have 6 charachters"
        }
       
       else if (this.state.password.match(/[a-z]/g) && this.state.password.match(/[A-Z]/g) && this.state.password.match(/[0-9]/g)) {
          return true;
        } 
        else {
          
          passwordError="The password must be a combination of charatacters , numbers and at least a capital letter";
        }
    
        if (passwordError){
            this.setState({passwordError});
            return false;
        }
        return true;
  
      };
    handleSubmit=event=>{
        event.preventDefault();
        const isValid= this.validate();
        const isValidate= this.validation();
        if ((isValid) ||(isValidate)){
        console.log(this.state);
        }
       
};
render(){

    return (
        <div>
        <form onSubmit={this.handleSubmit}>
             <h1 className="log-title"> SIGN UP</h1><br/>
            
            <label for="email" className="email-text">Enter your email:</label><br/>
<input type="email" id="email" name="email" placeholder="Email Adress" value={this.state.email}
 onChange={this.handleChange}/><br/>
<div>{this.state.emailError} </div>
<label for="pwd">Password:</label> <br/>
<input type="password" id="pwd" name="password" placeholder="Password" value={this.state.password}
onChange={this.handleChange}/> <br/>
<div>{this.state.passwordError} </div>
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> 
<label for="vehicle1"> Accept the Terms and Conditions </label> <br/>
<button type="submit" onClick={this.handleSubmit} >submit </button>

            
</form>
</div>
)}}


export default Login


