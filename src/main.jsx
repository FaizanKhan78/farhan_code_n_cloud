import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from './store/index.jsx';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </AuthContextProvider>

);
