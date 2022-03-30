import './card.css';
import card_common from '../../img/card-common.svg';
import ico_market from '../../img/ico-market.svg';

const Card = () => {
    return ( 
        <div className='card'>
            <div className='card-header'>
                <div className='card-header--price'>
                    <img src={ico_market} />
                    <p> 0.001 BNB</p>
                </div>
                <div className='card-header--mint'>
                    <button>MINT</button>                   
                </div>
            </div>
            <div className='card-body'>
                <p>Minted 0/1000</p>      
                <img src={card_common} />
            </div>
            <div className='card-footer'>
                <h3>COMMON</h3>
                <div className='card-footer--property'>
                    <div className='card-footer--table'>
                        <p>Common</p>
                        <p className='porcent'>60%</p>
                        <p>Epic</p>
                        <p className='porcent'>0.1%</p>
                    </div>
                    <div className='card-footer--table'>
                        <p>Uncommon</p>
                        <p className='porcent'>30%</p>
                        <p>Legendary</p>
                        <p className='porcent'>0.9%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Card;