import { useState } from "react";
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const {name, email, password, password2} = formData;

  const onChange = (e) => {
    setFormData((prevState) => (
      {
        ...prevState,
        [e.target.id]: e.target.value
      }
    ));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) toast.error('Passwords do not match');
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" id='name' value={name} onChange={onChange} required placeholder="enter your name"/>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" id='email' value={email} onChange={onChange} required placeholder="enter your email"/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id='password' value={password} onChange={onChange} required placeholder="enter password"/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id='password2' value={password2} onChange={onChange} required placeholder="confirm password"/>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register