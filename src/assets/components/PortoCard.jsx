import { BsGithub, BsGlobe } from "react-icons/bs";
import "../css/card.css";

function PortoCard({  imgPath,title, description, ghLink, demoLink }) {
    return (
        <div className="portofolioCard ">
            <div className="portofolioImg">
                <img variant="top" src={imgPath} alt="card-img" />
            </div>
            <div className="portofolioCardContent">
                <div className="portofolioTitle">{title}</div>
                <div className="portofolioDesc">
                    {description}
                </div>
                <div className="btnFrame">
                 
                    <a href={ghLink} className="portofolioGithubButton" target="_blank">
                        <BsGithub /> &nbsp;
                        GitHub
                    </a>
                 
                        <a href={demoLink} className="portofolioDemoButton" target="_blank">
                            <BsGlobe /> &nbsp;
                            Demo
                        </a>
                 
                </div>
            </div>
        </div>
    )
}

export default PortoCard