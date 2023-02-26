import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './Components/Header';
import MainBody from './Components/MainBody';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className='container'>
    <Header />
    <MainBody />
    <Footer />
  </div>
);
