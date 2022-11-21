import React from 'react'
import {createRoot}  from 'react-dom/client'
import ReactDOM  from 'react-dom'

import App from './App'
const mainContainer  =document.getElementById('root');

createRoot(mainContainer).render(<App/>)
// ReactDOM.render(<App/>,mainContainer)