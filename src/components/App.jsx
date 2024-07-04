// Fichero src/components/App.jsx
import { Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import Footer from './Footer';
import Header from './Header';
import Gallery from './Gallery';
import Contact from './Contact';
import NotFound from './NotFound';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Gallery/>}/>
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;