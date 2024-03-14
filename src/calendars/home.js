import React from 'react'
import { Container, Row, Col, Button, Card, CardHeader, CardTitle, CardBody, CardFooter } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Home() {
  const navigate = useNavigate()

  const navigateToAfroditi = () => {
    navigate('/afroditi')
  }

  const navigateToChris = () => {
    navigate('/chris')
  }

  return (
    <Container className="text-center mt-4">
      <img src={logo} width={'700vw'} className="img-fluid" alt="logo" />
      <h2>Welcome to your calendars page!</h2>
      <hr className="hr-3"></hr>
      <h4>The Application is up and running!</h4>
      <p>This is the application where you can see directly your reservations' calendars with real data, taken from Google Calendars</p>
      <Card className="mt-5 mb-5 border-0 shadow-lg">
        <CardHeader>
          <CardTitle>
            <h3>Available Calendars</h3>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md={6} sm={12}>
              <Button type="button" className="btn btn-primary w-100 m-1" onClick={navigateToAfroditi}>
                Afroditi Suite Availability Calendar
              </Button>
            </Col>
            <Col md={6} sm={12}>
              <Button type="button" className="btn btn-primary w-100 m-1" onClick={navigateToChris}>
                Chris House Availability Calendar
              </Button>
            </Col>
          </Row>
        </CardBody>
        <CardFooter>
          <p>This app created by Georgios Zavlanis for the website Gallios Houses</p>
        </CardFooter>
      </Card>
    </Container>
  )
}
