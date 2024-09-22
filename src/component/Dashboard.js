import React, { useEffect, useState } from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
 
  return (
    <div className={styles.container}>
      <h2>Dashboard</h2>
      <div className={styles.details}>
        <p>Welcome to your dashboard!</p>
        <p>Here are your details:</p>
        <ul>
          <li>Email: {sessionStorage.getItem("email") || 'N/A'}</li>
          <li>Username: {sessionStorage.getItem("username")|| 'N/A'}</li>
          <li>Account Status: Active</li>
          <li>Last Login: {new Date().toLocaleString()}</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
