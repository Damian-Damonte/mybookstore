import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Home from './components/home/Home';
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';

function App() {
  return (
    <>
      <ToastContainer />
      <Header/>
      <Home/>
      <Footer />
    </>
  )
}

export default App
