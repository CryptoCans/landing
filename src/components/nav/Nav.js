import './nav.css';
import logo from '../../img/logo.png';
import ico_wallet from '../../img/ico-wallet.png';
import ico_dasboard from '../../img/ico-dasboard.png';
import ico_market from '../../img/ico-market.png';
import ico_race from '../../img/ico-race.png';

const Nav = () => {
    return ( 
        <nav className="nav">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="menu">
                <ul>
                    <li><img src={ico_dasboard} ></img>Dashboard</li>
                    <li><img src={ico_market} ></img>Marketplace</li>
                    <li><img src={ico_race} ></img>Race</li>
                </ul>
            </div>
            <div className="wallet">
                <div className='wallet-address'>
                    <span className='address'>0xaeD3...7a98</span>
                    <span className='balance'>BNB $49,700</span>
                </div>
                <div className='ico-wallet'>
                    <img src={ico_wallet} />  
                </div>
            </div>
        </nav>
     );
}
 
export default Nav;