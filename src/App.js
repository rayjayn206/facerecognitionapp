import React from 'react';
import './App.css';
import Clarifai from 'clarifai';
//import Particles from 'react-particles';
import FaceDetection from './FaceDetection';
import Imagelink from './Imagelink';
//import Rank from './Rank';
import Navigation from './Navigation';

import Signin from './Signin';

import Register from './Register';

const app = new Clarifai.App({
	apiKey: '3bb6f9c06374409aa2cd7d2772c769b7'
})



class App extends React.Component
{

   
constructor(){

super();
this.state={

input:'',
imageUrl:'',
box:{},
route: 'signin',
issignedin: false
}
}
componentDidMount(){


  fetch('http://localhost/4000/').then(response=>response.json()).then(console.log)
  
  
     }
  


calculateFaceLocation(data){

const clarifaiFace= data.outputs[0].data.regions[0].region_info.bounding_box;
const image = document.getElementById('inputimage');
const width = Number(image.width);
const height = Number(image.height);
console.log(width);
console.log(height);

return{
leftCol: clarifaiFace.left_col * width,
topRow:  clarifaiFace.top_row * height,
rightCol: width - (clarifaiFace.right_col * width),
bottomRow: height - (clarifaiFace.bottom_row * height)
}

}

displayFaceBox=(box)=>{
console.log(box);
this.setState({box:box})


}
onInputChange=(event)=>{

this.setState({input:event.target.value});

}

onButtonSubmit = () =>{

this.setState({imageUrl: this.state.input});

app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input).then(response=>
this.displayFaceBox(this.calculateFaceLocation(response))

)
.catch(err=>console.log('error'))



	}


  onRouteChange=(route)=>{
  if(route==='signout'){
  

    this.setState({issignedin:false})
  }
  else if(route==='home'){
  
    this.setState({issignedin:true})
  }
  
this.setState({route:route})

}
 
render(){
  return (
    <div className="App">
      
      <Navigation onRouteChange={this.onRouteChange} issignedin={this.state.issignedin} />
{
this.state.route ==='home'?<div>
<Imagelink onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>

<FaceDetection box={this.state.box} imageUrl={this.state.imageUrl}/>
</div>
:(this.state.route==='signin'?  <Signin onRouteChange={this.onRouteChange}/>:

<Register onRouteChange={this.onRouteChange}/>
)


}


 </div>     
  );
}
  

}
export default App;
 