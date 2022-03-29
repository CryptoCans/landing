import './roadmap.css';
import ico_check from '../../img/ico-check.svg';
import ico_block from '../../img/ico-block.svg';

const Roadmap = () => {
    return ( 
        <section className="roadmap">
            <div className='title'>
                <h2>ROADMAP</h2>
            </div>
            <div className="bar-container">
                <div className='bar'></div>
                <div className='circle-container'>
                    <div className='circle'><img src={ico_check} /></div>
                    <div className='circle' style={{marginTop: '110px'}}><img src={ico_block} /></div>
                    <div className='circle' style={{marginTop: '120px'}}><img src={ico_block} /></div>
                </div>
            </div>
            <div className="tables">
               
                    <div className='table-item'>
                        <h3 className='title-active'>Q2 2022</h3>
                        <div style={{marginLeft: '10px'}}> 
                            <div className='text-content'>
                                <span className='point-active'></span><p>Diseño de la landing page.</p>
                            </div>
                            <div className='text-content'>
                                <span className='point'></span><p>Promoción en redes y Youtube.</p>
                            </div>
                            <div className='text-content'>
                                <span className='point'></span><p>Preventa del Token y NFT.</p>
                            </div>
                            <div className='text-content'>
                                <span className='point'></span><p>Lanzamiento de las carreras contra la maquina (Single Race).</p>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className='table-item no-active'>
                        <h3>Q3 2022</h3>
                        <div style={{marginLeft: '10px'}}>
                            <div className='text-content'> 
                                <span className='point'></span><p>Lanzamiento del modo de alimento a tus perros.</p>
                            </div>
                            <div className='text-content'>
                                <span className='point'></span><p>Lanzamiento del modo de carreras Rank.</p>
                            </div>
                            <div className='text-content'>
                                <span className='point'></span><p>Lanzamiento del módulo de apuestas.</p>
                            </div>
                            <div className='text-content'>
                                <span className='point'></span><p>Ampliación del equipo de trabajo.</p>
                            </div>
                        </div>
                    </div>
                    <div className='table-item no-active'>
                        <h3>Q4 2022</h3>
                        <div style={{marginLeft: '10px'}}>
                            <div className='text-content'>
                                <span className='point'></span><p>Mini juego de visita a los canódromos para alimentar los perros de otros jugadores.</p>
                            </div>
                            <div className='text-content'>
                                <span className='point'></span><p>Becas.</p>
                            </div>
                            <div className='text-content'>
                                <span className='point'></span><p>Juego en 3d para móviles de competencias en tiempo real contra otros jugadores.</p>
                            </div>
                        </div>
                    </div>
            
            </div>
        </section>
     );
}
 
export default Roadmap;