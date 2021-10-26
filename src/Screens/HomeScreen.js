import React from "react";
import { Carousel, Container, Row, Col, Card, Table } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import slider2 from "../img/pexels-ron-lach-9169658.jpg";
import slider1 from "../img/afetyardim1.jpg";
import slider3 from "../img/basvuru.JPG";

const HomeScreen = () => {
  return (
    <div>
      <Container className="py-3">
        <Carousel nextLabel="ilerü" fade>
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
            <Col className="col-md-12">
              <Card
                className="border-secondary mt-3"
                style={{ height: "11em" }}
              >
                <Card.Header>YARDIM PROGRAMI</Card.Header>
                <Card.Body>
                  <Card.Text>Afet-Acil Durum Yardımları</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-md-12">
              <Card
                className="border-secondary mt-3"
                style={{ height: "11em" }}
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
          <Row className="col-md-12">
            <Col>
              <Card
                className="border-secondary mt-3"
                style={{ height: "11em" }}
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
            <Col className="col-md-12">
              <Card
                className="border-secondary mt-3"
                style={{ height: "11em" }}
              >
                <Card.Header>BAŞVURAN</Card.Header>
                <Card.Body>
                  <Card.Text>18 yaş üstü aile bireyi</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-12">
              <Card
                className="border-secondary mt-3 "
                style={{ height: "11em" }}
              >
                <Card.Header>EVRAK</Card.Header>
                <Card.Body>
                  <Card.Text>T.C. Kimlik Kartı</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-md-12">
              <Card
                className="border-secondary my-3"
                style={{ height: "11em" }}
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
            <h2 className="py-2">Hesap Numaralarımız</h2>
         <Table hover variant="secondary" className="mb-3">
            <thead>
              <tr>
                <th>Banka Adı</th>
                <th>Hesap Türü</th>
                <th>Hesap No</th>
                <th>IBAN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ziraat Bankası</td>
                <td>Türk Lirası</td>
                <td>2124994-5007</td>
                <td>TR66 0001 0004 8802 1249 9450 07</td>
              </tr>
              <tr>
                <td>VakıfBank</td>
                <td>Türk Lirası</td>
                <td>00158007266577589</td>
                <td>TR29 0001 5001 5800 7266 5775 89</td>
              </tr>
              <tr>
                <td>Türkiye İş Bankası</td>
                <td>Türk Lirası</td>
                <td>1346-50627</td>
                <td>TR92 0006 4000 0011 3460 0506 27</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Container>
    </div>
  );
};

export default HomeScreen;
