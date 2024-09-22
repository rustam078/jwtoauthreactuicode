// Login.js
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/signin', {
        email,
        password
      });
      console.log('Login Success:', response.data);
     if(response.data){
        navigate("/dashboard");
     }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleOAuthLogin = (provider) => {
    window.location.href = `http://localhost:8080/oauth2/authorization/${provider}`;
  };

  useEffect(() => {
    axios.get('http://localhost:8080/oauthSignin', { withCredentials: true })
        .then(response => {
         // setUsername(response.data);
            console.log("response.data ===========================>> ", response.data);
           
            sessionStorage.setItem("user", JSON.stringify(response.data));
 
            // Redirect to the home page
            navigate('/dashboard');
 
    
        })
        .catch(error => {
            console.error("Error occurred while fetching user data:", error);
        });
}, []); //
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>Login</h2>
        <form onSubmit={handleEmailLogin}>
          <div className={styles.inputGroup}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.loginButton}>Login</button>
        </form>

        <div className={styles.separator}>or login with</div>

        <div className={styles.oauthButtons}>
          <button className={`${styles.oauthButton} ${styles.google}`} onClick={() => handleOAuthLogin('google')}>
            <FaGoogle className={styles.icon} />
            Login with Google
          </button>
          <button className={`${styles.oauthButton} ${styles.github}`} onClick={() => handleOAuthLogin('github')}>
            <FaGithub className={styles.icon} />
            Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
