import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Spinner } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const validateInputs = () => email && password;

  const handleSignIn = async (event) => {
    event.preventDefault();
    setLoading(true);
    setButtonDisabled(true);

    if (!validateInputs()) {
      toast.error("Please fill in all fields.");
      setLoading(false);
      setButtonDisabled(false);
      return;
    }

    try {
      const res = await axios.post("https://icec.onrender.com/api/users/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Login failed! Please check your credentials.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
      setButtonDisabled(false);
    }
  };

  const handleSocialSignIn = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      toast.success(`${provider.providerId} Sign-in successful!`);
      localStorage.setItem("token", result.user.accessToken);
      window.location.reload();
    } catch (error) {
      toast.error(`${provider.providerId} Sign-in failed!`);
    }
  };

  return (
    <section className="vh-100 d-flex flex-column justify-content-between bg-light">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100 fade-in">
          <div className="col-md-9 col-lg-6 col-xl-5 mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid fade-in rounded"
              alt="Sample"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 fade-in">
            <h2 className="text-xl my-4 text-center fw-bold text-titleColor">
              Login
            </h2>
            <form onSubmit={handleSignIn} className="px-3">
              {/* Email input */}
              <div className="form-outline mb-4">
                <label htmlFor="email" className="form-label fw-bold">
                  Email address
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    id="email"
                    className={`form-control form-control-lg ${!email ? "is-invalid" : ""}`}
                    placeholder="Enter a valid email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {!email && (
                  <div className="invalid-feedback">
                    Email address is required.
                  </div>
                )}
              </div>

              {/* Password input */}
              <div className="form-outline mb-3">
                <label htmlFor="password" className="form-label fw-bold">
                  Password
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaLock />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className={`form-control form-control-lg ${!password ? "is-invalid" : ""}`}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {!password && (
                  <div className="invalid-feedback">Password is required.</div>
                )}
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id="rememberMe"
                  />
                  <label className="form-check-label fw-bold" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <a href="/forgot-password" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100"
                  disabled={buttonDisabled}
                >
                  {loading ? <Spinner animation="border" size="sm" /> : "Login"}
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="/registration" className="link-danger">
                    Register
                  </a>
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
                className="btn btn-outline-danger w-100 mx-1 d-flex align-items-center justify-content-center"
                onClick={() => handleSocialSignIn(new GoogleAuthProvider())}
              >
                <FaGoogle className="me-2 fs-4" /> Google
              </button>
              <button
                type="button"
                className="btn btn-outline-dark w-100 mx-1 d-flex align-items-center justify-content-center"
                onClick={() => handleSocialSignIn(new GithubAuthProvider())}
              >
                <FaGithub className="me-2 fs-4" /> GitHub
              </button>
              <button
                type="button"
                className="btn btn-outline-primary w-100 mx-1 d-flex align-items-center justify-content-center"
                onClick={() => handleSocialSignIn(new FacebookAuthProvider())}
              >
                <FaFacebook className="me-2 fs-4" /> Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
