import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import styles from './Main.module.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className={styles.container}>
    <App />
  </div>
)
