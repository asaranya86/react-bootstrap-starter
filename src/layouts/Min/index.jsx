import { Container, Row, Navbar, Col, Figure } from 'react-bootstrap';
import data from '../../data';
export default function MainLayout({ children }) {
  return (
    <Container className='bg-light min-vh-100 d-flex flex-column px-0' fluid>
      <Row noGutters>
        <Col>
          <Navbar
            expand='lg'
            className='border-bottom shadow-sm py-2 '
            variant='dark'
            bg='dark'>
            <Navbar.Brand href='/'>
              <div className='d-flex align-items-center flex-column flex-md-row'>
                <Figure.Image
                  alt='cognizant logo'
                  className='mb-0 rounded-circle bg-black mr-2'
                  width={62}
                  height={62}
                  src='logo192.png'
                />
                <h4>{data.app_name}</h4>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
          </Navbar>
        </Col>
      </Row>
      <Row noGutters className='flex-grow-1'>
        <Col as='article' className='p-3'>
          {children}
        </Col>
      </Row>
      <Row noGutters as='footer' className='py-1 bg-dark'>
        <Col as='span' className='text-center text-white-50 small'>
          © 2021 {data.company_name}
        </Col>
      </Row>
    </Container>
  );
}
