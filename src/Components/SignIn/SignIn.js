import React from 'react';


class Signin extends React.Component  {
	constructor(props){
		super(props);
		this.state = {
			signEmail : '',
			signPassword : ''
		}
	}

	onEmailChange = (event) => {
		this.setState({signEmail : event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({signPassword : event.target.value});
	}

	onSubmitSign = () => {
		console.log(this.state);
		fetch('https://fast-mesa-43613.herokuapp.com/signin',{
			method: 'POST',
			headers: {'Content-Type' : 'application/json'},
			body: JSON.stringify({
				email : this.state.signEmail,
				password : this.state.signPassword
			})
		}).then(response => response.json()).then(user => {
				if(user.id) {
					this.props.loadUser(user);
					this.props.onPlaceChange('home');
				}
			})
		
	}

	render()
	{
		const {onPlaceChange} = this.props;
	return(
			<article className="br3 ba dark-gray shadow-box-6 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
				<main className="pa4 black-80 ">
				  <form className="measure ">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
				      <div className="mt3 ">
				        <label className=" db fw6  lh-copy f6 " htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
				        type="email" 
				        name="email-address"  
				        id="email-address"
				        onChange={this.onEmailChange} />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="password" 
				        name="password"  
				        id="password"
				        onChange = {this.onPasswordChange} />
				      </div>
				    </fieldset>
				    <div className="center ">
				      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib " 
				      type="button" value="Sign in" 
				      onClick = {this.onSubmitSign}/>
				    </div>
				    <div className="lh-copy mt3 center">
				      <p onClick = {() => onPlaceChange('register')} className="f6 pointer link dim black db">Register</p>
				    </div>
				  </form>
				</main>
			</article>

		);
	}
}

export default Signin;