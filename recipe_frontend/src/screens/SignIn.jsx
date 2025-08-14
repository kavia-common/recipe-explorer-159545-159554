import React, { useState, useCallback } from 'react';
import styles from './SignIn.module.css';
import '../styles/common.css';

// PUBLIC_INTERFACE
export default function SignIn() {
  /**
   * This component renders the "Sign In" screen based on the provided Figma design.
   * It includes:
   * - Email and password inputs
   * - Password visibility toggle
   * - Primary "Sign In" button
   * - "Forgot Password?" link and social sign-in buttons
   * - Status bar and home indicator decorations for visual fidelity
   *
   * Returns:
   *   JSX.Element: The complete Sign In screen.
   */

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const onTogglePassword = useCallback(() => {
    setShowPass((v) => !v);
  }, []);

  const onSignIn = useCallback((e) => {
    e?.preventDefault?.();
    if (!email.trim() || !password) {
      alert('Please enter both Email and Password.');
      return;
    }
    // Placeholder for real sign-in flow
    alert('Signing in...');
  }, [email, password]);

  const onKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      onSignIn(e);
    }
  }, [onSignIn]);

  return (
    <div className={styles.screen} role="main" aria-label="Sign In screen">
      {/* Status Bar (visual) */}
      <div className="status-bar" role="banner" aria-label="Status bar">
        <div className="time">19:27</div>
        <div className="icons" aria-hidden="true">
          <span className="cell"></span>
          <span className="wifi"></span>
          <span className="battery"><span className="level"></span></span>
        </div>
      </div>

      {/* Title Group */}
      <div className={styles['title-group']} aria-label="Title Area">
        <h1 className={styles.hello}>Hello,</h1>
        <div className={styles.welcome}>Welcome Back!</div>
      </div>

      {/* Email Input Field */}
      <div className={`${styles['input-field']} ${styles.email}`} aria-label="Email input field">
        <label className="label" htmlFor="email">Email</label>
        <div className="control">
          <input
            id="email"
            className="input"
            type="email"
            placeholder="Enter Email"
            autoComplete="username"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={onKeyDown}
          />
        </div>
      </div>

      {/* Password Input Field */}
      <div
        className={`${styles['input-field']} ${styles.password} ${showPass ? styles.show : ''}`}
        aria-label="Password input field"
      >
        <label className="label" htmlFor="password">Enter Password</label>
        <div className={styles['password-wrapper']}>
          <input
            id="password"
            type={showPass ? 'text' : 'password'}
            placeholder="Enter Password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <button
            className={styles['toggle-pass']}
            type="button"
            aria-label={showPass ? 'Hide password' : 'Show password'}
            onClick={onTogglePassword}
          />
        </div>
      </div>

      {/* Forgot Password */}
      <a href="#" className={styles['forgot-password']}>Forgot Password?</a>

      {/* Primary Button: Sign In */}
      <button
        className={`btn-primary ${styles['sign-in-btn']}`}
        id="btn-sign-in"
        type="button"
        aria-label="Sign In"
        onClick={onSignIn}
      >
        <span className="sr-only">Sign In</span>
        <span className={styles['btn-text']}>Sign In</span>
        <span className={styles['icon-arrow']} aria-hidden="true"></span>
      </button>

      {/* Divider: Or Sign in With */}
      <div className={styles.divider} role="separator" aria-label="Or sign in with">
        <span className={styles.line}></span>
        <span className={styles.text}>Or Sign in With</span>
        <span className={styles.line}></span>
      </div>

      {/* Social Buttons */}
      <button className={`social-btn ${styles['social-google']}`} aria-label="Sign in with Google">
        <span className={styles['g-icon']} aria-hidden="true"></span>
      </button>

      <button className={`social-btn ${styles['social-facebook']}`} aria-label="Sign in with Facebook">
        <span className={styles['fb-icon']} aria-hidden="true">f</span>
      </button>

      {/* Sign up CTA */}
      <div className={styles['signup-text']}>
        Don’t have an account? <a href="#" className={styles['signup-link']} aria-label="Sign up">Sign up</a>
      </div>

      {/* Home Indicator (visual) */}
      <div className="home-indicator" role="contentinfo" aria-label="Home indicator">
        <div className="bar"></div>
      </div>
    </div>
  );
}
