import './nav.css';
import logo from '../../img/logo.svg';
import ico_wallet from '../../img/ico-wallet.svg';
import ico_dasboard from '../../img/ico-dasboard.svg';
import ico_market from '../../img/ico-market.svg';
import ico_race from '../../img/ico-race.svg';

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