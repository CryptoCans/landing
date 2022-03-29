import './footer.css';
import telegram from '../../img/telegram.svg';
import discord from '../../img/discord.svg';

const Footer = () => {
    return ( 
        <footer className='footer'>
            <div className='copi'>
                <h3>Copyright © Crypto Cans</h3>
                <ul className='list'>
                    <li>Condiciones de uso</li>
                    <li>Política de privacidad</li>
                    <li>hola@cryptocans.io</li>
                </ul>
            </div>
            <div className='redes'>
                <h3>Únete a nuestra comunidad</h3>
                <div className='footer-icon'>
                    <a><img src={telegram} /></a>
                    <a><img src={discord} /></a>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;