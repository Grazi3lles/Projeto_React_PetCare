import './App.css';
import Banner from './components/banner.js';
import Header from './components/header.js';
import Formulario from './components/form.js';
import Prices from './components/calculadora.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner></Banner>
      <Formulario/>
      <Prices/>
      <Footer/>
    </div>
  );
}

export default App;
