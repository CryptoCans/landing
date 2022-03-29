import './header.css';
import header_can from '../../img/header-can.png';

const Header = () => {
    return (
        <header className="header">
            <div className='header-text'>
                <h1>Juego NFT de carreras de perros ciborg</h1>
                <p>Es una experiencia de carreras de perros ciborg en un mundo virtual completamente descentralizado.</p>
                <div className='header-text--btn'>
                    <button className='btn-primary'>Botton</button>
                    <button>Whitepaper</button>
                </div>
            </div>
            <div className='header-img'>
                <img src={header_can} />
            </div>
        </header> 
    );
}
 
export default Header;