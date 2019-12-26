import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    const [formData, setFormdata] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2} = formData;    
    
    const onChange = e => setFormdata({...formData, [e.target.name]: e.target.value})

    const onSubmit = async e => {
        e.preventDefault();
        console.log('success')
    }
    return (
        <Fragment> 
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign Into your account</p>
      <form className="form" action="create-profile.html" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" value={name} onChange={e => onChange(e)} required />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
        </Fragment>
    )
}

export default Login;
