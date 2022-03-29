import './team.css';
import ceo from '../../img/ceo.svg';
import front from '../../img/front.svg';
import blockchain from '../../img/blockchain.svg';
import design from '../../img/design.svg';
import instagram from '../../img/instagram.svg';
import linkeding from '../../img/linkeding.svg';

const Team = () => {
    return ( 
        <section className='team'>
            <div>
                <h2>EQUIPO</h2>
                <p className='team-p'>Ejecutivo y Desarrollo</p>
            </div>
            <div className='grid'>
                <div className='team-card'>
                    <div className='img'>
                        <img src={ceo} />
                    </div>
                    <div className='card-data'>
                        <p>Mauricio Mendoza</p>
                        <p>Co-fundador</p>
                        <p>CEO</p>
                    </div>
                    <div className='card-redes'>
                        <a><img src={instagram} /></a>
                        <a><img src={linkeding} /></a>
                    </div>
                </div>
                <div className='team-card'>
                    <div className='img'>
                        <img src={front} />
                    </div>
                    <div className='card-data'>
                        <p>Jason Hernández</p>
                        <p>Desarrollador Frontend</p>
                    </div>
                    <div className='card-redes'>
                        <a><img src={instagram} /></a>
                        <a><img src={linkeding} /></a>
                    </div>
                </div>
                <div className='team-card'>
                    <div className='img'>
                        <img src={blockchain} />
                    </div>
                    <div className='card-data'>
                        <p>Manuel Perez</p>
                        <p>Desarrollador blockchain</p>
                    </div>
                    <div className='card-redes'>
                        <a><img src={instagram} /></a>
                        <a><img src={linkeding} /></a>
                    </div>
                </div>
                <div className='team-card'>
                    <div className='img'>
                        <img src={design} />
                    </div>
                    <div className='card-data'>
                        <p>Enny Hidalgo</p>
                        <p>Artista Conceptual</p>
                    </div>
                    <div className='card-redes'>
                        <a><img src={instagram} /></a>
                        <a><img src={linkeding} /></a>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Team;