import { useState, useEffect } from 'react';
import './header.css';
import header_can from '../../img/header-can.svg';

const Header = () => {

    const [ picture, setPicture ] = useState(true);

    useEffect(() => {
        if (window.matchMedia("(min-width: 768px)").matches) {
            setPicture(true);
        }else{
            setPicture(false);
        }
    }, []);

    window.addEventListener('resize', () => {

        if (window.matchMedia("(min-width: 768px)").matches) {
            setPicture(true);
        }else{
            setPicture(false);
        }
     });


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
            {picture &&
            (
                <div className='header-img'>
                    <img src={header_can} />
                </div>
            )}
            
        </header> 
    );
}
 
export default Header;