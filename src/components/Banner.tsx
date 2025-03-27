import { Col, Container, Row } from "react-bootstrap"
import headerImg from '../assets/img/header-img.svg'

import { useState, useEffect } from "react"


function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Dev Front-end","Web Developer", "Web Designer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);            
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


  return (
    <section className="banner" id="home">
        <Container>
            <Row>
                <Col className="banner-text" xs={12} md={6} xl={7}>
                 <span className="tagline">
                    Bem-vindo ao meu Portfolio
                 </span>
                 <h1>{`Olá, eu sou o Wellington `} <br /> <span className="noWrap">{text}</span> </h1>
                 <p className="banner-p">Sou um desenvolvedor front-end com experiência em React, Next.js, TypeScript e JavaScript. Estou sempre em busca de novos desafios e oportunidades de crescimento profissional.</p>
                 
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner
