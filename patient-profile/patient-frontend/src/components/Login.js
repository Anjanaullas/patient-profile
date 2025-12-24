import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [isRegister, setIsRegister] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Save user in localStorage
    const user = { username, password };
    localStorage.setItem('user', JSON.stringify(user));

    alert('Registration successful! Please login.');
    setIsRegister(false);

    // clear fields
    setPassword('');
    setConfirmPassword('');
  };

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (!savedUser) {
      alert('No user registered. Please register first.');
      return;
    }

    if (
      username === savedUser.username &&
      password === savedUser.password
    ) {
      onLogin(username, password);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isRegister ? handleRegister() : handleLogin();
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h3>{isRegister ? 'Register' : 'Login'}</h3>

        <form onSubmit={handleSubmit}>
          <table className="login-table">
            <tbody>
              <tr>
                <td>Username</td>
                <td>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>Password</td>
                <td>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </td>
              </tr>

              {isRegister && (
                <tr>
                  <td>Confirm</td>
                  <td>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) =>
                        setConfirmPassword(e.target.value)
                      }
                      required
                    />
                  </td>
                </tr>
              )}

              <tr>
                <td colSpan="2" style={{ textAlign: 'center' }}>
                  <button type="submit">
                    {isRegister ? 'Register' : 'Login'}
                  </button>
                </td>
              </tr>

              <tr>
                <td colSpan="2" style={{ textAlign: 'center' }}>
                  <span
                    className="toggle-link"
                    onClick={() => setIsRegister(!isRegister)}
                  >
                    {isRegister
                      ? 'Already have an account? Login'
                      : 'New user? Register'}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default Login;
