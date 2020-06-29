import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";

 class Register extends React.Component {
  state={
    name:"",
    email:"",
    password:"",
    adress:"",
    phone:"",
    nameError:"",
    emailError:"",
    passwordError:"",
    adressError:"",
    phoneError:""
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
   valid=()=>{
    let  nameError ="";
    if( this.state.name<1) {
      nameError=" name can not be blank";    
      }
      if (nameError){
        this.setState({nameError});
        return false;
    }
    return true;

  };


handleSubmit=event=>{
  event.preventDefault();
   const isValid= this.validate();
  const isValidate= this.validation();
  const isValide=this.valid();
  
  if ((isValidate)||(isValide)||(isValid)) {
  console.log(this.state);
  }
};

render(){

  return (
    <div className="reg-container">
       <form onSubmit={this.handleSubmit}>
      <h1 className="reg-title"> REGISTER</h1> <br />
     
        <label for="fname"> User Name:</label> <br />
        <input type="text" id="name" name="name"  value={this.state.name}
         onChange={this.handleChange} /><br />
          <div>{this.state.nameError} </div>

        <label for="email" className="email-text"> Enter your email:</label><br />
        <input type="email" id="email" name="email" placeholder="Email Adress" value={this.state.email}

           onChange={this.handleChange}/><br />
           <div>{this.state.emailError} </div>
        <label for="pwd"> Enter your Password:</label> <br />
        <input type="password" id="pwd" name="password" placeholder="Password" value={this.state.password}
       
       onChange={this.handleChange} /><br />
       <div>{this.state.passwordError} </div>
        <label for="fname"> Enter Your Adress:</label><br />
        <input type="text" id="fname" name="adress"  value={this.state.adress}
        onChange={this.handleChange}  /><br />
        <label for="phone">Enter your phone number:</label> <br />
        <input type="tel" id="phone" name="phone"  value={this.state.phone} 
        onChange={this.handleChange}  /> <br />
        <Button variant="danger" className="sign-btn"  onClick={this.handleSubmit}>
          Register
        </Button>
        <Button variant="warning">Cancel</Button>
      </form>
    </div>
  );
}
 }
export default Register