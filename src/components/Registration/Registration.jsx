import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registration.css';
import logo from "/logo.png";
import Footer from '../Footer';
import { FaEnvelope, FaGithub, FaGoogle } from 'react-icons/fa';

const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        // Log the data being sent
        console.log('Submitting Registration Data:', data);
    
        try {
            const response = await fetch('https://icec.onrender.com/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            // Log the response status and any potential error messages
            console.log('Response Status:', response.status);
            console.log('Response Headers:', response.headers);
    
            if (!response.ok) {
                // Try to get the error message from the response
                const errorData = await response.json();
                console.error('Error Response:', errorData);
                throw new Error(errorData.message || 'Registration failed!');
            }
    
            const result = await response.json();
            console.log('Registration successful:', result);
            toast.success('Registration successful! Please check your email for verification.'); // Success message
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error: ' + error.message); // Error message
        }
    };
    
    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <motion.section
                className="vh-100 d-flex flex-column justify-content-between"
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
                transition={{ duration: 1 }}
            >
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100 fade-in">
                        <div className="col-md-9 col-lg-6 col-xl-5 mb-4">
                            <img 
                                src={logo} 
                                className="img-fluid fade-in" 
                                alt="logo" 
                                loading="lazy"
                            />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 fade-in">
                            <h2 className="text-xl my-4 text-center fw-bold">Registration</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="px-3">
                                {/* Fullname input */}
                                <div className="form-outline mb-4">
                                    <label htmlFor="fullname" className="form-label fw-bold">Full Name</label>
                                    <input 
                                        type="text" 
                                        id="fullname" 
                                        className={`form-control form-control-lg ${errors.fullname ? 'is-invalid' : ''}`} 
                                        placeholder="Your Full Name" 
                                        {...register('fullname', { required: 'Full name is required' })} 
                                    />
                                    {errors.fullname && <div className="invalid-feedback">{errors.fullname.message}</div>}
                                </div>

                                {/* Email input */}
                                <div className="form-outline mb-4">
                                    <label htmlFor="email" className="form-label fw-bold">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`} 
                                        placeholder="name@example.com" 
                                        {...register('email', { required: 'Email address is required' })} 
                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                                </div>

                                {/* Password input */}
                                <div className="form-outline mb-4">
                                    <label htmlFor="password" className="form-label fw-bold">Password</label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        className={`form-control form-control-lg ${errors.password ? 'is-invalid' : ''}`} 
                                        placeholder="********" 
                                        {...register('password', { required: 'Password is required' })} 
                                    />
                                    {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                                </div>

                                {/* Agree to terms */}
                                <div className="form-check mb-4">
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox" 
                                        id="iAgree" 
                                        {...register('iAgree', { required: 'You must agree to the terms' })} 
                                    />
                                    <label className="form-check-label fw-bold" htmlFor="iAgree">
                                        I agree to the <a href="#!" className="link-danger">terms and conditions</a>
                                    </label>
                                    {errors.iAgree && <div className="text-danger">{errors.iAgree.message}</div>}
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg w-100">
                                        Sign up
                                    </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">
                                        Already have an account? <a href="/login" className="link-danger">Sign in</a>
                                    </p>
                                </div>
                            </form>

                            {/* Sign in with section */}
                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or sign in with</p>
                            </div>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mb-4">
                                <button 
                                    type="button" 
                                    className="btn btn-outline-primary w-100 mx-1" 
                                    onClick={() => {/* Add Google sign-in logic */}}
                                >
                                    <FaGoogle /> Google
                                </button>
                                <button 
                                    type="button" 
                                    className="btn btn-outline-dark w-100 mx-1" 
                                    onClick={() => {/* Add GitHub sign-in logic */}}
                                >
                                    <FaGithub /> GitHub
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
            <ToastContainer /> {/* Add ToastContainer to your component */}
        </>
    );
};

export default Registration;
