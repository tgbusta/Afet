import React from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <Container>
      <Dropdown.Divider />

      <Row>
        <Col>
          <Row className="text-center">
            <h4>Hava Durumu</h4>
          </Row>
          <Row>
            <Col></Col>
            <Col>
            <a target="_blank" href="/">
              <img
                src="https://w.bookcdn.com/weather/picture/32_18522_1_21_34495e_250_2c3e50_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=765&anc_id=51659"
                alt="booked.net"
              />
            </a>
            </Col>
            <Col></Col>
          </Row>
        </Col>

        <Col>
          <Row className="text-center">
            <h4>İletişim</h4>
          </Row>
          <Row>
            <p>Daha fazla bilgi almak için bize ulaşın.</p>
            <p>
              {" "}
              <FiPhoneCall />
              <span> Yardım Masası:</span> +90 (312) 705 59 00
            </p>
            <p>
              <MdOutlineAlternateEmail />
              <span> E-Posta Adresi:</span> btgm.okm@aile.gov.tr
            </p>
          </Row>
        </Col>

        <Col>
          <Row className="text-center">
            <h4>Sosyal Medya Hesaplarımız</h4>
          </Row>

          <Row>
            <Col className="m-4">
              <a href="https://www.instagram.com/tcailesosyal/" target="_blank" rel="noreferrer">
                <FaInstagram size="2em" className="mx-3" />
                Instagram
              </a>
            </Col>
            <Col className="m-4">
              <a href="https://twitter.com/tcailesosyal/" target="_blank" rel="noreferrer">
                <FaTwitter size="2em" className="mx-3"/>
                Twitter
              </a>
            </Col>
          </Row>

          <Row>
            <Col className="m-4">
              <a href="https://www.facebook.com/tcailesosyal" target="_blank" rel="noreferrer">
                <FaFacebookF size="2em" className="mx-3"/>
                Facebook
              </a>
            </Col>
            <Col className="m-4">
              <a href="https://www.youtube.com/ailevesosyal" target="_blank" rel="noreferrer">
                <FaYoutube size="2em" className="mx-3"/>
                YouTube
              </a>
            </Col>
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
