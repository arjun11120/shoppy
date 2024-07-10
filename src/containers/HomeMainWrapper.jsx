import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../components/SideBar'

const HomeMainWrapper = () => {
  return (
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col>1 of 1</Col>    
      </Row>
  )
}

export default HomeMainWrapper