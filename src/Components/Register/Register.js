import React from 'react';


class Register extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      Email : '',
      Password : '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name : event.target.value});
  }

  onEmailChange = (event) => {
    this.setState({Email : event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({Password : event.target.value});
  }

    onSubmitSign = () => {
    console.log(this.state);
    fetch('https://fast-mesa-43613.herokuapp.com/register',{
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        email : this.state.Email,
        password : this.state.Password,
        name: this.state.name
      })
    }).then(response => response.json()).then(user => {
        if(user.id) {
          this.props.loadUser(user)
          this.props.onPlaceChange('home')
        }
      })
    
  }

  render(){
   
	return(
    		<article className="br3 ba dark-gray shadow-box-6 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
      		<main className="pa4 black-80 ">
            <form className="measure ">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0 center">Register</legend>
                <div className="mt3 ">
                  <label className=" db fw6  lh-copy f6 " htmlFor="name">Name</label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="name" 
                  name="name"  
                  id="name" 
                  onChange={this.onNameChange}/>
                </div>
                <div className="mt3 ">
                  <label className=" db fw6  lh-copy f6 " htmlFor="email-address">Email</label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address"  
                  id="email-address" 
                  onChange={this.onEmailChange}/>
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password"  
                  id="password"
                  onChange={this.onPasswordChange} />
                </div>
              </fieldset>
              <div className="center ">
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib " 
                type="button" value="Register" 
                onClick = {this.onSubmitSign}/>
              </div>
            </form>
      </main>
    </article>

		);
}
}

export default Register;