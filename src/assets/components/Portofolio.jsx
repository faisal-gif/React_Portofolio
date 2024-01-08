import { Row, Col } from "react-bootstrap";
import { SiGithub } from "react-icons/si";
import PortoCard from "./PortoCard";
import { getData } from '../utils/data';
import "../css/portofolio.css";


function Portofolio() {
    const listPorto = getData();
    return (
        <section id="portofolio">
            <div className="portofolioContainerBox">
                <div className="portofolioContainer">
                    <p className="subTitle">Recent Projects</p>
                    <span className="heading">My Portofolio</span>
                </div>
                <div className="">
                    <button className="btnGitHub"><SiGithub />  View More </button>
                </div>
            </div>

            <Row style={{ justifyContent: "center", display: "flex", paddingBottom: "10px", flexWrap: "wrap", }}>
                {
                    listPorto.map((porto) => {
                        return (
                        <Col md={4} className="project-card" key={porto.id}>
                            <PortoCard 
                               {...porto} />
                        </Col>
                        )
                    })
                }






            </Row>
        </section >
    )
}

export default Portofolio