import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'
import './scss/styles.scss'

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    window.document.getElementById('app')
)
