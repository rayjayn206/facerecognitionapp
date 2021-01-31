import React from 'react';



class Signin extends React.Component{

  constructor(props){

  super(props);
  this.state={

   email:'',
   password:''
  }

  }

onemailChange=(event)=>{

this.setState({email:event.target.value});


}
onPasswordChange=(event)=>{
  this.setState({password:event.target.value})


}


onSubmitSignin=()=>{

 
 
 
   fetch('http://localhost:4000/signin',{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({
      
      name:this.state.name,
      email:this.state.email,
      password:this.state.password, 
    })  
  }).then(response=>console.log(response))

 //this.props.onRouteChange('home')

 





}

render(){
  return (
  <main class="pa4 white-80 center">
    <div class="measure center">
      <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
        <legend class="f4 fw6 ph0 mh0"  >Sign In</legend>
        <div class="mt3">
          <label class="db fw6 lh-copy f6" for="email-address">Email</label>
          <input onChange={this.onemailChange} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
        </div>
        <div class="mv3">
          <label  class="db fw6 lh-copy f6" for="password">Password</label>
          <input onChange={this.onPasswordChange} class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
        </div>
       
      </fieldset>
      <div class="">
        <input  onClick={this.onSubmitSignin}class="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
      </div>
      <div class="lh-copy mt3">
        <a href="#0" class="f6 link dim white db">Forgot your password?</a>
  
  
        <p onClick={()=>{this.props.onRouteChange('register')}} class="f6 link dim white db pointer">Register</p>
      </div>
    </div>
  </main>
  
    );
  
 

}
}

export default Signin;









