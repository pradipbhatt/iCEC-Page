import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registration.css';
import logo from "/logo.png";

const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
    };

    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const slideInVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.section
            className="p-4 p-md-5"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ duration: 1 }}
        >
            <div className="container">
                <motion.div
                    className="shadow-sm rounded"
                    initial="hidden"
                    animate="visible"
                    variants={slideInVariants}
                    transition={{ duration: 1.2 }}
                >
                    <div className="row g-0">
                        <div className="col-12 col-md-6 bg-light">
                            <motion.div
                                className="d-flex align-items-center justify-content-center h-100"
                                initial="hidden"
                                animate="visible"
                                variants={fadeInVariants}
                                transition={{ duration: 1.5 }}
                            >
                                <div className="col-10 col-xl-8 py-4">
                                    <motion.img
                                        className="img-fluid rounded mb-4"
                                        loading="lazy"
                                        src={logo}
                                        width="250"
                                        height="150"
                                        alt="logo"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 1 }}
                                    />
                                    <hr className="border-light mb-4" />
                                    <h2 className="h1 mb-4 text-secondary">
                                        Join us to explore, learn, and build the future of technology together.
                                    </h2>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-12 col-md-6">
                            <motion.div
                                className="card-body p-4 p-md-5"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2 }}
                            >
                                <div className="mb-5">
                                    <h2 className="h3">Registration</h2>
                                    <h3 className="fs-6 fw-normal text-secondary m-0">Enter your details to register</h3>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row gy-3 overflow-hidden">
                                        <div className="col-12">
                                            <label htmlFor="name" className="form-label">
                                                Name <span className="text-danger">*</span>
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="fas fa-user fs-5"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    {...register('name', { required: true })}
                                                    id="name"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="phoneNumber" className="form-label">
                                                Phone Number <span className="text-danger">*</span>
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="fas fa-phone-alt fs-5"></i>
                                                </span>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    {...register('phoneNumber', { required: true })}
                                                    id="phoneNumber"
                                                    placeholder="Phone Number"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="email" className="form-label">
                                                Email <span className="text-danger">*</span>
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="fas fa-envelope fs-5"></i>
                                                </span>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    {...register('email', { required: true })}
                                                    id="email"
                                                    placeholder="name@example.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="password" className="form-label">
                                                Password <span className="text-danger">*</span>
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="fas fa-lock fs-5"></i>
                                                </span>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    {...register('password', { required: true })}
                                                    id="password"
                                                    placeholder="********"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    {...register('iAgree', { required: true })}
                                                    id="iAgree"
                                                />
                                                <label className="form-check-label text-secondary" htmlFor="iAgree">
                                                    I agree to the <a href="#!" className="link-primary text-decoration-none">terms and conditions</a>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <motion.button
                                                    className="btn btn-primary"
                                                    type="submit"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Sign up
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="mt-5">
                                    <hr className="border-secondary-subtle" />
                                    <p className="text-secondary text-center">
                                        Already have an account? <a href="/login" className="link-primary text-decoration-none">Sign in</a>
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <p>Or sign in with</p>
                                    <div className="d-flex gap-3 flex-column flex-xl-row">
                                        <motion.a
                                            href="#!"
                                            className="btn btn-outline-primary"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <i className="fab fa-google me-2"></i> Google
                                        </motion.a>
                                        <motion.a
                                            href="#!"
                                            className="btn btn-outline-primary"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <i className="fab fa-github me-2"></i> GitHub
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Registration;
