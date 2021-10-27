import React from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { FaTwitterSquare } from "react-icons/fa";
import { ImInstagram, ImFacebook2 } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <Container>
      <Dropdown.Divider />
      <Row>
        <Col>
          <h2>Hava Durumu</h2>
          <a target="_blank" href="/">
            <img
              src="https://w.bookcdn.com/weather/picture/32_18522_1_21_34495e_250_2c3e50_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=765&anc_id=51659"
              alt="booked.net"
            />
          </a>
        </Col>

        <Col>
          <Row>
            <Col className="text-center">
              <h4>İletişim</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Daha fazla bilgi almak için bize ulaşın.</p>
              <p>
                {" "}
                <FiPhoneCall />
                <span> Yardım Masası:</span> +90 (312) 705 59 00
              </p>
              <p>
                <MdOutlineAlternateEmail />
                <span> E-Posta Adresi:</span> contact@example.com
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <ImInstagram />
              <a href="/">Instagram</a>
            </Col>
            <Col>
              <a href="/">
                <FaTwitterSquare />
                Twitter
              </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <ImFacebook2 />
              <a href="/">Facebook</a>
            </Col>
            <Col>
              <a href="/">
                <SiLinkedin />
                LinkedIn
              </a>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col className="text-center">
              <h4>Instagram</h4>
            </Col>
          </Row>

          <Row>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
          </Row>
        </Col>
      </Row>
      <Dropdown.Divider />
      <Row>
        <small className="credits text-center">
          Aile ve Sosyal Hizmetler Bakanlığı | Bilgi Teknolojileri
          GenelMüdürlüğü
        </small>
        <small className="copyright text-center">
          <p>2021 &copy; Tüm Hakları Saklıdır</p>
        </small>
      </Row>
    </Container>
  );
};

export default Footer;
