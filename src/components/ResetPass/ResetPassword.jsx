import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ResetPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            // Send the request to the forgot password API
            const response = await axios.post('https://icec.onrender.com/api/users/forgot-password', {
                email: data.email,
            });

            // Show success toast
            toast.success('Password reset link has been sent to your email.');
            console.log('Response:', response.data);

        } catch (error) {
            // Show error toast
            toast.error('Failed to send reset link. Please try again later.');
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };

    // Animation variants
    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.section
            className="flex items-center justify-center min-h-screen p-4 md:p-8"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="shadow-md rounded-md max-w-4xl w-full h-[600px] bg-white"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col md:flex-row h-full">
                    <div className="w-full md:w-1/2 bg-gray-100">
                        <div className="flex items-center justify-center h-full p-4">
                            <div className="w-10/12 xl:w-8/12 py-4">
                                <h2 className="text-2xl mb-4 text-gray-700">Reset Your Password</h2>
                                <p className="text-gray-600">
                                    Enter your email address, and we’ll send you a link to reset your password.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-2 mt-16">
                        <div className="p-7 md:p-8">
                            <div className="mb-5 ">
                                <h2 className="text-xl">Forgot your password?</h2>
                                <h3 className="text-sm font-light text-gray-600">
                                    We'll send you a link to reset it.
                                </h3>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="space-y-8">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative mt-1 rounded-md shadow-sm">
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                <i className="fas fa-envelope text-gray-400"></i>
                                            </span>
                                            <input
                                                type="email"
                                                className="pl-10 block w-full h-12 rounded-md border-gray-300 
                                                focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 
                                                transition duration-200 ease-in-out transform hover:scale-105"
                                                {...register('email', { required: true })}
                                                id="email"
                                                placeholder="name@example.com"
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="text-red-500 mt-2 text-sm">
                                                Please enter a valid email address.
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <motion.button
                                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 
                                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                            type="submit"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Send Reset Link
                                        </motion.button>
                                    </div>
                                </div>
                            </form>
                            <div className="mt-5">
                                <hr className="border-gray-300" />
                                <p className="text-gray-600 text-center mt-3">
                                    Remembered your password? <a href="/login" className="text-blue-500 hover:underline">Sign in</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            {/* Toast container */}
            <ToastContainer />
        </motion.section>
    );
};

export default ResetPassword;
