import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      navigate('/')
    }, 3000)
  }

  return (
    <div className='signup'>
      <div className="signup-container">
        <div className="signup-header">
          <h1>Create Account</h1>
          <p>Join CryptoPlace and start your crypto journey</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              minLength="6"
            />
          </div>

          <div className="form-checkbox">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></label>
          </div>

          <button type="submit" className="signup-btn">Create Account</button>

          <div className="signup-divider">
            <span>or sign up with</span>
          </div>

          <div className="social-signup">
            <button type="button" className="social-btn google">
              <span>G</span> Google
            </button>
            <button type="button" className="social-btn github">
              <span>⌘</span> GitHub
            </button>
          </div>

          <p className="login-link">
            Already have an account? <span onClick={() => navigate('/')}>Log in</span>
          </p>
        </form>
      </div>

      {showSuccess && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon">✅</div>
            <h2>Welcome to CryptoPlace!</h2>
            <p>Your account has been created successfully.</p>
            <p className="modal-redirect">Redirecting to home page...</p>
            <div className="modal-loader"></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SignUp
