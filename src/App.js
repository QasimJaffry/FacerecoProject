import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLink from './Components/ImageLink/ImageLink';
import Rank from './Components/Rank/Rank';
import ImageShow from './Components/ImageShow/ImageShow';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import './App.css';

import Particles from 'react-particles-js';



const particlesOptions = {
  particles: {
    number: {
      value: 55,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
const initial = 
   {
      input: '',
      imageUrl: '',
      box: {},
      place: "signin",
      signedIn: false,
      user:{
        id: '',
        name: '',
         email: '',
        password: '',
        entries:0,
        joined:''
      }
    }

class App extends Component {
  constructor() {
    super();
    this.state = initial;
  }

  loadUser = (data) => {
    this.setState({user:{
        id: data.id,
        name: data.name,
         email: data.email,
        password: data.password,
        entries:data.entries,
        joined:data.joined
      }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftSide: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    fetch('http://localhost:3001/imageurl',{
            method:'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
              input: this.state.input
            })
          })
    .then(response => response.json())
      .then(response => {
        if(response){
          fetch('http://localhost:3001/image',{
            method:'PUT',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
              id:this.state.user.id
            })
          }).then(response=>response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user,{entries: count}));
            })
          }

        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

  onPlaceChange = (route) => {
    if(route === 'signout'){
      this.setState(initial);
    }else if (route === 'home'){
      this.setState({signedIN : true});
    }
    this.setState({place : route});
  }

  render() {
    const { imageUrl, box } = this.state;
    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}/>

        <Navigation onPlaceChange={this.onPlaceChange} signedIN = {this.state.signedIN}/>
      {
        this.state.place === 'home'
         ? <div>
          <Logo />
          <Rank name={this.state.user.name} entries={this.state.user.entries}/>
          <ImageLink
                  onInputChange={this.onInputChange}
                  onButtonSubmit={this.onButtonSubmit}
          />
          <ImageShow box={box} imageUrl={imageUrl} />
           </div>
           
       : (this.state.place === 'signin' || this.state.place === 'signout') 
            ?<SignIn loadUser={this.loadUser} onPlaceChange={this.onPlaceChange} signedIN = {this.state.signedIn}/>
            :<Register loadUser={this.loadUser} onPlaceChange={this.onPlaceChange} signedIN = {this.state.signedIn}/>
       } 
      </div>
    );
  }
}
export default App;