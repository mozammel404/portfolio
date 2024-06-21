import {Link} from "react-router-dom";

const Error404 = () => {
    return ( 
        <div className="text">
            Error 404, path "{window.location.pathname}" not found!
            <br /><Link to="/" className="text">Go to Home</Link>
        </div>
     );
}
 
export default Error404;