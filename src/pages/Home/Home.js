import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    window.document.title = "Portfolio | Mozammel Hossain Joy";
    return (
        <section className="home">
            <div className="wrapper">
                <p className="title text">Mozammel Hossain Joy</p>
                <Link to="/about-me" className="button text">LEARN MORE ABOUT ME</Link>
            </div>
        </section>
    );
}

export default Home;