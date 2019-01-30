import React from 'react';
import './ErrorPage.css';

const ErrorPage = ({ message, children }) => {
  return (
    <div className="error-page">
      <h3>{message}</h3>
      {children}
    </div>
  );
};

export default ErrorPage;
