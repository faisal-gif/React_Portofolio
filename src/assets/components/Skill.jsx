import React from 'react'
import { Col, Row } from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiMongodb,
    DiPython,
    DiJava,
    DiPhp,
    DiLaravel,
    DiHtml5,
    DiCss3,
    DiMysql,
    DiBootstrap,
    DiGit,
} from "react-icons/di";
import { SiCpanel, SiFirebase, SiGithub, SiGitlab, SiHeroku, SiUnity, SiVisualstudiocode } from "react-icons/si";
import '../css/skill.css';

function Skill() {
    return (
        <section id='skills'>
            <div className="skillTitle">
                Tech Skills
            </div>
            <Row className='skillList' >
                <Col xs={4} md={2} className="skill-icons">
                    <DiHtml5 />
                </Col>
                <Col xs={4} md={2} className="skill-icons">
                    < DiCss3 />
                </Col>
                <Col xs={4} md={2} className="skill-icons">
                    <DiJavascript1 />
                </Col>
                <Col xs={4} md={2} className="skill-icons">
                    <DiPhp />
                </Col>
                <Col xs={4} md={2} className="skill-icons">
                    <DiJava />
                </Col>
                <Col xs={4} md={2} className="skill-icons">
                    <DiPython />
                </Col>
                <Col xs={4} md={2} className="skill-icons">
                    <DiMysql />
                </Col>
                <Col xs={4} md={2} className="skill-icons">
                    <DiMongodb />
                </Col>
                <Col xs={4} md={2} className="skill-icons">
                    <SiFirebase />
                </Col>
                <Col xs={4} md={2} className="skill-icons">
                    <DiLaravel />
                </Col>
                <Col xs={4} md={2} className="skill-icons">
                    <DiBootstrap />
                </Col>
                <Col xs={4} md={2} className="skill-icons">
                    <DiReact />
                </Col>
                <Col xs={4} md={2} className="skill-icons">
                    <DiGit />
                </Col>
            </Row>

            <div className="skillTitle">
                Tools Skills
            </div>
            <Row className='skillList' >
                <Col xs={4} md={2} className="skill-icons">
                    <SiVisualstudiocode />
                </Col>
                <Col xs={4} md={2} className="skill-icons">
                    <SiUnity />
                </Col>
                <Col xs={4} md={2} className="skill-icons">
                    <SiHeroku />
                </Col>
                <Col xs={4} md={2} className="skill-icons">
                    <SiGithub />
                </Col>
                <Col xs={4} md={2} className="skill-icons">
                    <SiGitlab />
                </Col>
                <Col xs={4} md={2} className="skill-icons">
                    <SiCpanel />
                </Col>
                
            </Row>

        </section>


    )
}

export default Skill