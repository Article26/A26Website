'use client'
import React, { useState } from 'react';
import { login, signup } from './actions';
import Image from 'next/image';
import article26logo from "@/assets/login-images/A26Logo.png";

export default function LoginPage() {
  const [isLoginSelected, setIsLoginSelected] = useState(true);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Financial Phenotype Test</h1>
      <div style={styles.poweredBy}>
        <h2 style={styles.subHeading}>powered by</h2>
        <Image src={article26logo} alt="Article 26 Logo" style={styles.logo} />
        <h3 style={styles.article26Text}>Article 26</h3>
      </div>
      <div style={styles.buttonContainer}>
        <button
          onClick={() => setIsLoginSelected(true)}
          style={{
            ...styles.toggleButton,
            backgroundColor: isLoginSelected ? '#FFD580' : 'lightgray', // Use hex color for light orange
            color: 'black'
          }}
        >
          Login
        </button>
        <button
          onClick={() => setIsLoginSelected(false)}
          style={{
            ...styles.toggleButton,
            backgroundColor: !isLoginSelected ? '#FFD580' : 'lightgray', // Use hex color for light orange
            color: 'black'
          }}
        >
          Sign up
        </button>
      </div>
      {isLoginSelected ? (
        <form style={styles.form}>
          <input id="email" name="email" type="email" required style={styles.input} placeholder="Email" />
          <input id="password" name="password" type="password" required style={styles.input} placeholder="Password" />
          <button formAction={login} style={styles.submitButton}>Log in</button>
        </form>
      ) : (
        <form style={styles.form}>
          <input id="firstName" name="firstName" type="text" required style={styles.input} placeholder="First Name" />
          <input id="lastName" name="lastName" type="text" required style={styles.input} placeholder="Last Name" />
          <input id="email" name="email" type="email" required style={styles.input} placeholder="Email" />
          <input id="password" name="password" type="password" required style={styles.input} placeholder="Password" />
          <button formAction={signup} style={styles.submitButton}>Sign up</button>
        </form>
      )}
      <style jsx>{`
        input::placeholder {
          color: black; /* Set placeholder text color to black */
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
  },
  heading: {
    color: 'black',
    fontSize: '40px', // Increased font size
    marginBottom: '10px',
  },
  poweredBy: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  subHeading: {
    color: 'black',
    fontSize: '24px', // Increased font size
    marginRight: '10px',
  },
  logo: {
    width: '50px',
    height: '50px',
  },
  article26Text: {
    color: 'black',
    fontSize: '18px',
    marginTop: '5px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  toggleButton: {
    padding: '10px 60px', // Increased width
    fontSize: '16px',
    margin: '5px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '16px',
    width: '300px', // Increased width
    borderRadius: '20px', // More rounded edges
    border: '1px solid #ccc',
    backgroundColor: 'lightgray',
    color: 'black', // Set input text color to black
  },
  submitButton: {
    padding: '10px 60px', // Increased width
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#FFD580',
    color: 'black',
    cursor: 'pointer',
  },
};
