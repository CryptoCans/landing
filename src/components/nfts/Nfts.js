import Card from '../card/Card';
import './nfts.css';


const Nfts = () => {
    return ( 
        <section className='nfts'>
            <h2>NFT ITEMS</h2>
            <div className='cards'>
                <Card />
                <Card />
                <Card />
            </div>
        </section>
     );
}
 
export default Nfts;