import React from 'react';

function Welcome({ username }) {
  return (
    <div className="page">
      <h2>Welcome, {username} 👋</h2>
      <p style={{ textAlign: 'center' }}>
        Please choose an option from the menu above
      </p>
    </div>
  );
}

export default Welcome;
