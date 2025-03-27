import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import img1 from '../assets/img/frontend1.png';
import img2 from '../assets/img/frontend2.png';
import img3 from '../assets/img/frontend3.png';
import img4 from '../assets/img/frontend4.png';
import img5 from '../assets/img/frontend5.png';
import img6 from '../assets/img/frontend6.png';
import img7 from '../assets/img/frontend7.png';
import img8 from '../assets/img/frontend8.png';
import img9 from '../assets/img/frontend9.png';


function Images() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4} lg={2} className='mb-4 d-flex flex-column align-items-center'>
            <img className='img' src={img1} alt="Minha Figura"/>
            <span>CSS</span>
        </Col>
        <Col xs={6} md={4} lg={2} className='mb-4 d-flex flex-column align-items-center'>
            <img className='img' src={img2} alt="Minha Figura"/>
            <span>HTML</span>
        </Col>
        <Col xs={6} md={4} lg={2} className='mb-4 d-flex flex-column align-items-center'>
            <img className='img' src={img3} alt="Minha Figura"/>
            <span>JAVASCRIPT</span>
        </Col>
        <Col xs={6} md={4} lg={2} className='mb-4 d-flex flex-column align-items-center'>
            <img className='img' src={img4} alt="Minha Figura"/>
            <span>TYPESCRIPT</span>
        </Col>
        <Col xs={6} md={4} lg={2} className='mb-4 d-flex flex-column align-items-center'>
            <img className='img' src={img5} alt="Minha Figura"/>
            <span>BOOTSTRAP</span>
        </Col>
        <Col xs={6} md={4} lg={2} className='mb-4 d-flex flex-column align-items-center'>
            <img className='img' src={img6} alt="Minha Figura"/>
            <span>TAILWIND CSS</span>
        </Col>
      </Row>
    </Container>
  );
}

export default Images;