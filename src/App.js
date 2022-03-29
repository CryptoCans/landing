import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Nfts from './components/nfts/Nfts';
import Tokenomics from './components/tokenomics/Tokenomics';
import Roadmap from './components/roadmap/Roadmap';
import Team from './components/team/Team';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Nfts />
      <Tokenomics />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
}

export default App;