import './App.css';
import AppRouter from './routers/AppRouter';
import Footer from './components/common/Footer';
import NavBar from './components/common/NavBar';
import Media from './components/medias/Media';

const TITLE = 'Peñiculas IUDigital'

function App() {
  return (
    <>
      <NavBar title= {TITLE}/>
      <Media/>
      <Footer/>

    <div className="container">
      Películas IU Digital - Entretenimiento Gratuito Online
    </div>

    </>
  );
}

export default App;
