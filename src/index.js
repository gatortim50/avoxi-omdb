import React from 'react'
import ReactDOM from 'react-dom'

import './styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
