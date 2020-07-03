import React from 'react';
import { Row, Col } from 'react-bootstrap';

function ProjectNameRight(props) {
    return (
        <div>
            <Row id="mainRow">
                <Col className="projectCols">
                    <img id="projectImage" src={props.image}/>
                </Col>
                <Col className="projectCols">
                    <Row className="rightRows">
                        <div id="projectName">{props.name}</div>
                    </Row>
                    <Row className="rightRows">
                        <hr id="projectLine"/>
                    </Row>

                </Col>
            </Row>
            
        </div>
    )
}

export default ProjectNameRight;