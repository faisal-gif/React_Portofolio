import imgDev from '../bg-dev.png';
import { Link } from "react-scroll";
import '../css/intro.css';

function Intro() {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName">Faisal</span><br />Website Developer</span>
                <p className="introParagraph">Halo Nama Saya Mochammad Faisal R     </p>
                <Link to='/#'><button className="btn">Hire Me</button></Link>
            </div>
            <img src={imgDev} alt="profile" className="bg" />
        </section>
    )
}

export default Intro