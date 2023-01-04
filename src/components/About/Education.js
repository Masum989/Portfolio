import React from 'react'
import {Row,Col} from 'react-bootstrap'
function Education() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={3} md={3} className="tech-icons">
        <h2>Graduation (B.Tech)</h2>
        <h6 style={{color:'black'}}><b>SAM College of engineering and technology, Bhopal M P </b></h6>
        <h6 style ={{color:'whilte'}}>CGPA - 8.02</h6>
      </Col>
      <Col xs={3} md={3} className="tech-icons">
       <h2>Senior secondary</h2>
       <h6 style={{color:'black'}}><b>Shivdeni Ram Ayodhya Prasad College, Chakia, Bihar </b></h6>
        <h6 style ={{color:'white'}}>Grade - 1st </h6>
      </Col>
      <Col xs={3} md={3} className="tech-icons">
       <h2>Higher secondary</h2>
       <h6 style={{color:'black'}}><b>Baldev Ayodhya Atim Praveshika , Chakia , Bihar </b></h6>
        <h6 style ={{color:'white'}}>Grade - 1st</h6>
      </Col>
      
      
    </Row>
  )
}

export default Education