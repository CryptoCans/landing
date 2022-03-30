import { useState, useEffect } from 'react';
import './tokenomics.css';

const Tokenomics = () => {

    const [ table, setTable ] = useState(true);

    useEffect(() => {
        if (window.matchMedia("(min-width: 992px)").matches) {
            setTable(true);
        }else{
            setTable(false);
        }
    }, []);

    window.addEventListener('resize', () => {

        if (window.matchMedia("(min-width: 992px)").matches) {
            setTable(true);
        }else{
            setTable(false);
        }

     });

    return ( 
        <section className="tokenomics">
            <h2>TOKENOMICS</h2>
            <div className='tokenomics-container'>
                {table && 
                (
                    <div className='tokenomics-table'>
                        <div className='bar-rigth bar-bottom'><span></span></div>
                        <div className='bar-bottom'><span>Percentage<br />of supply</span></div>
                        <div className='bar-rigth bar-bottom'><span>Marketing</span></div>
                        <div className='bar-bottom'><span>4%</span></div>
                        <div className='bar-rigth bar-bottom'><span>Advisors</span></div>
                        <div className='bar-bottom'><span>4%</span></div>
                        <div className='bar-rigth bar-bottom'><span>Investors</span></div>
                        <div className='bar-bottom'><span>8%</span></div>
                        <div className='bar-rigth bar-bottom'><span>Devs</span></div>
                        <div className='bar-bottom'><span>3%</span></div>
                        <div className='bar-rigth bar-bottom'><span>Preventa Pinksale</span></div>
                        <div className='bar-bottom'><span>20%</span></div>
                        <div className='bar-rigth bar-bottom'><span>Airdrop Gratuito</span></div>
                        <div className='bar-bottom'><span>1%</span></div>
                        <div className='bar-rigth'><span>Farming in Game</span></div>
                        <div><span>8%</span></div>
                    </div>
                )}
                
                <div className='tokenomics-porcent'>
                    <div className='porcent-item marketing'>
                        <div className='porcent-item--circle'>
                                <span className='gout-top'></span>
                                <span className='gout-rigth'></span>
                                <span className='cuadro'></span>
                                <span className='dentro'>4%</span>
                        </div>
                        <h3 className='porcent-item--text'>Marketing</h3>
                    </div>
                    <div className='porcent-item preventa'>
                        <div className='porcent-item--circle'>
                                <span className='gout-top'></span>
                                <span className='gout-rigth'></span>
                                <span className='cuadro'></span>
                                <span className='dentro'>20%</span>
                        </div>
                        <h3 className='porcent-item--text'>Preventa <br /> Pinksale</h3>
                    </div>
                    <div className='porcent-item advisors'>
                        <div className='porcent-item--circle'>
                                <span className='gout-top'></span>
                                <span className='gout-rigth'></span>
                                <span className='cuadro'></span>
                                <span className='dentro'>4%</span>
                        </div>
                        <h3 className='porcent-item--text'>Advisors</h3>
                    </div>
                    <div className='porcent-item airdrop'>
                        <div className='porcent-item--circle'>
                                <span className='gout-top'></span>
                                <span className='gout-rigth'></span>
                                <span className='dentro'>1%</span>
                        </div>
                        <h3 className='porcent-item--text'>Airdrop <br />Gratuito</h3>
                    </div>
                    <div className='porcent-item investors'>
                        <div className='porcent-item--circle'>
                                <span className='gout-top'></span>
                                <span className='gout-rigth'></span>
                                <span className='cuadro'></span>
                                <span className='dentro'>8%</span>
                        </div>
                        <h3 className='porcent-item--text'>Investors</h3>
                    </div>
                    <div className='porcent-item farming'>
                        <div className='porcent-item--circle'>
                                <span className='gout-top'></span>
                                <span className='gout-rigth'></span>
                                <span className='cuadro'></span>
                                <span className='dentro'>60%</span>
                        </div>
                        <h3 className='porcent-item--text'>Farming <br />in Game</h3>
                    </div>
                    <div className='porcent-item devs'>
                        <div className='porcent-item--circle'>
                                <span className='gout-top'></span>
                                <span className='gout-rigth'></span>
                                <span className='cuadro'></span>
                                <span className='dentro'>3%</span>
                        </div>
                        <h3 className='porcent-item--text'>Devs </h3>
                    </div>
                </div>
            </div>
        </section> 
    );
}
 
export default Tokenomics;