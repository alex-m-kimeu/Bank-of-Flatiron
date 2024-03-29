import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Bank-of-Flatiron/'}>
    <App/>
  </BrowserRouter>
)
