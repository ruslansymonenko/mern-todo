import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const RegisterPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  // const instance = axios.create({
  //   baseURL: 'http://localhost:5000',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // });

  const changeHandler = (event) => {
    setForm({
    ...form,
      [event.target.name]: event.target.value
    });
    console.log(form);
  }

  const submitHandler = async (event) => {
    try {
      await axios.post('http://localhost:5000/api/auth/registration', {...form})
      .then(response => {console.log(response)})
    } catch (error) {console.log(error)}
  }

  return (
    <div className="container">
      <div className="auth-page">
        <h3>Registration</h3>
        <form 
          className='form form-login'
          onSubmit={e => e.preventDefault()}
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
                className='wawes-effect wawes-light btn blue'
                onClick={submitHandler}
                >
                Registration
              </button>

              <Link to="/auth" className="btn-outline btn-reg">Already have an account?</Link>
            </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage