import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Logging in with', data);
  };

  return (
   <>
     <section className="vh-100 d-flex flex-column justify-content-between">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100 fade-in">
          <div className="col-md-9 col-lg-6 col-xl-5 mb-4">
            <img 
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" 
              className="img-fluid fade-in" 
              alt="Sample" 
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 fade-in">
            <h2 className="text-xl my-4 text-center fw-bold">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="px-3">
              {/* Email input */}
              <div className="form-outline mb-4">
                <label htmlFor="form3Example3" className="form-label fw-bold">Email address</label>
                <input 
                  type="email" 
                  id="form3Example3" 
                  className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`} 
                  placeholder="Enter a valid email address" 
                  {...register('email', { required: 'Email address is required' })} 
                />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
              </div>

              {/* Password input */}
              <div className="form-outline mb-3">
                <label htmlFor="form3Example4" className="form-label fw-bold">Password</label>
                <input 
                  type="password" 
                  id="form3Example4" 
                  className={`form-control form-control-lg ${errors.password ? 'is-invalid' : ''}`} 
                  placeholder="Enter password" 
                  {...register('password', { required: 'Password is required' })} 
                />
                {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" id="form2Example3" />
                  <label className="form-check-label fw-bold" htmlFor="form2Example3">Remember me</label>
                </div>
                <a href="/forgot-password" className="text-body">Forgot password?</a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg w-100">
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account? <a href="/registration" className="link-danger">Register</a>
                </p>
              </div>
            </form>

            {/* Sign in with section */}
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or sign in with</p>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mb-4">
              <button type="button" className="btn btn-primary btn-floating mx-1">
                <FontAwesomeIcon icon={faFacebookF} />
              </button>
              <button type="button" className="btn btn-primary btn-floating mx-1">
                <FontAwesomeIcon icon={faTwitter} />
              </button>
              <button type="button" className="btn btn-primary btn-floating mx-1">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    <Footer/>
    </section>
   </>
  );
};

export default Login;
