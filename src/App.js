import { useState, Fragment, useLayoutEffect } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Nfts from './components/nfts/Nfts';
import Tokenomics from './components/tokenomics/Tokenomics';
import Roadmap from './components/roadmap/Roadmap';
import Team from './components/team/Team';
import Footer from './components/footer/Footer';
import Loader from './components/loader/Loader';
import './App.css';

function App() {

  const [ load, setLoader ] = useState(true);

  useLayoutEffect(() => {
    setTimeout(() => {
      document.querySelector('.App').style.height = 'auto';
      document.querySelector('.App').style.display = 'block';
      document.querySelector('.App').style.placeItems = 'null';
      setLoader(false);
    }, 2000);
      
      // if(document.querySelector('.container'))
      //     document.querySelector('.container').style.display = 'grid';
      // setTimeout(() => setLoader(false), 1000);
      
  }, [load]);	

  return (
    <div className="App">
      {load && <Loader />}
      {!load &&
      <Fragment>
          <Nav />
          <Header />
          <Nfts />
          <Tokenomics />
          <Roadmap />
          <Team />
          <Footer />
      </Fragment>}
    </div>
  );
}

export default App;