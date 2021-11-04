import React from "react";
import { Carousel, Container, Row, Col, Card, Table } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import slider2 from "../img/pexels-ron-lach-9169658.jpg";
import slider1 from "../img/afetyardim1.jpg";
import slider3 from "../img/basvuru.JPG";
import Production from "../Components/Product";


const HomeScreen = () => {
  return (
    <div>
      <Container className="py-3">
        <Carousel nextLabel="ileri" fade>
          <Carousel.Item>
            <Image className="d-block w-100" src={slider1} fluid />
            <Carousel.Caption>
              <h2>Afet ve Acil Durum Yardımları</h2>
              <h3>Kimler Faydalanabilir?</h3>
              <p>
                Afet ve acil durum hallerinden etkilenen herkes faydalanabilir.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image className="d-block w-100" src={slider2} fluid />
            <Carousel.Caption>
              <h2>Afet ve Acil Durum Yardımları</h2>
              <h3>Nasıl Bir Destek Veriliyor?</h3>
              <p>
                Afet ve acil durum hallerinde, etkilenen kişilerin acil ve temel
                ihtiyaçlarının karşılanmasına yönelik destek sağlanır.{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image className="d-block w-100" src={slider3} fluid />
            <Carousel.Caption>
              <h2>Afet ve Acil Durum Yardımları</h2>
              <h3>Nasıl Başvurulur?</h3>
              <p>
                Bulunduğunuz yerdeki Sosyal Yardımlaşma ve Dayanışma Vakfımıza
                başvurabilirsiniz.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Container>
          <Row>
            <Col className="col-md-6, col-sm-12, col-lg-6">
              <Card
                className="shadow border-secondary mt-3 rounded"
                style={{ minHeight: "15em" }}
              >
                <Card.Header>YARDIM PROGRAMI</Card.Header>
                <Card.Body>
                  <Card.Text>Afet-Acil Durum Yardımları</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-md-6, col-sm-12, col-lg-6">
              <Card
                className="shadow border-secondary mt-3 rounded"
                style={{ minHeight: "15em" }}
              >
                <Card.Header>KAPSAMI</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Afet ve acil durum hallerinde, Sosyal Yardımlaşma ve
                    Dayanışma (SYD) Vakıfları tarafından vatandaşlarımızın gıda,
                    giyim, barınma vb. temel ihtiyaçlarının karşılanmasına
                    yönelik yardımları kapsamaktadır.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row >
            <Col className="col-md-6, col-sm-12, col-lg-6">
              <Card
                className="shadow border-secondary mt-3 rounded"
                style={{ minHeight: "15em" }}
              >
                <Card.Header>KİMLER FAYDALANIR</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Afet ve /veya acil durum halinden etkilenen vatandaşlar,
                    olayın meydana geldiği tarihten itibaren ilk bir ay
                    içerisinde, muhtaçlık koşulu aranmaksızın faydalanırlar.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-md-6, col-sm-12, col-lg-6">
              <Card
                className="shadow border-secondary mt-3 rounded"
                style={{ minHeight: "15em" }}
              >
                <Card.Header>BAŞVURAN</Card.Header>
                <Card.Body>
                  <Card.Text>18 yaş üstü aile bireyi</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-6, col-sm-12, col-lg-6">
              <Card
                className="shadow border-secondary mt-3 rounded"
                style={{ minHeight: "15em" }}
              >
                <Card.Header>EVRAK</Card.Header>
                <Card.Body>
                  <Card.Text>T.C. Kimlik Kartı</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-md-6, col-sm-12, col-lg-6">
              <Card
                className="shadow border-secondary mt-3 rounded"
                style={{ minHeight: "15em" }}
              >
                <Card.Header>TUTAR VE ÖDEME DÖNEMİ</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Tutar acil ve temel ihtiyaçlar göz önünde bulundurularak
                    Sosyal Yardımlaşma ve Dayanışma Vakfı Mütevelli Heyetince,
                    ihtiyaca göre belirlenmektedir.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container className="py-5">
            <h2 className="py-2">Siz de Onlara Elinizi Uzatın</h2>
         <Production/>
        </Container>
      </Container>
    </div>
  );
};

export default HomeScreen;
