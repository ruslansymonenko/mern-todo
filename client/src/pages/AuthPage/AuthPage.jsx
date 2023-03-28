import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './AuthPage.scss';

const AuthPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const changeHandler = (event) => {
    setForm({
    ...form,
      [event.target.name]: event.target.value
    });
    console.log(form);
  }

  const submitHandler = async (event) => {
    try {
      await axios.post('/api/auth/login', {...form}, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {console.log(response)})
    } catch (e) {console.log(e)}
  }

  return (
    <div className="container">
      <div className="auth-page">
        <h3>Authorization</h3>
        <form 
          className='form form-login'
          onSubmit={e => e.preventDefault}
          >
          <div className="row">
            <div className="input-field col s12">
              <input 
                type="email" 
                name='email'
                className='validate login-input'
                onChange={changeHandler}
                />
                <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12">
              <input 
                type="password" 
                name='password'
                className='validate login-input'
                onChange={changeHandler}
                />
                <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <button 
              className='wawes-effect wawes-light btn blue'>
              Login
            </button>

            <Link to="/register" className="btn-outline btn-reg">Don't have account?</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthPage