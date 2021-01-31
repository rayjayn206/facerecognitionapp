import React from 'react';


class Register extends React.Component{



constructor(props){
super(props);

this.state={

name:'',
email:'',
password:''


}

}
onemailChange=(event)=>{

this.setState({email: event.target.value})

}
onpasswordChange=(event)=>{

  this.setState({password:event.target.value})
  
  }
onnameChange=(event)=>{

    this.setState({name:event.target.value})
    
    }
onsubmitRegister=()=>{


  fetch('http://localhost:4000/register',{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({
      
      name:this.state.name,
      email:this.state.email,
      password:this.state.password, 
    })  
  
  
  
  }).then(response=>console.log(response))
 


}

render(){
return (
<main class="pa4 white-80 center">
  <div class="measure center">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      
      <div class="mt3">
        <label class="db fw6 lh-copy f6" for="name" >Name</label>
        <input onChange={this.onnameChange} class ="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
        <label class="db fw6 lh-copy f6" for="email" >Email</label>
        <input onChange={this.onemailChange}class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div class="mv3">
        <label class="db fw6 lh-copy f6" for="password" >Password</label>
        <input onChange={this.onpasswordChange}class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>    
      </div>
     
    </fieldset>
        
    <div class="">
        <input onClick={this.onsubmitRegister}class="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" type="submit" value="Register"/>

    </div>
  </div>
</main>

    );
    

}

}
export default Register;