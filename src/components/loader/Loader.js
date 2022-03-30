import './loader.css';
import logo from '../../img/logo.svg';

const Loader = () => {

    return (
        <div className="pre-loader">
            <img src={logo} />
		    {/* <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div> */}
	    </div>
    );
}

export default Loader;