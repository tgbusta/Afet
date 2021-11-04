import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import nakit from "../img/nakit.jpg";
import gida from "../img/gida.jpg";
import temizlik from "../img/temizlik.jpg";
import giyim from "../img/giyim.jpg";
import { FaBoxOpen } from "react-icons/fa";

function Production() {
  return (
    <div>
      <Row>
        <Col className="col-md-6, col-sm-12, col-lg-6">
          <Card className="shadow border-secondary mt-3 rounded" style={{ }}>
          <Card.Header>
            <h4>Nakit Desteği</h4></Card.Header>
            <Image variant="top" src={nakit} fluid/>
            <Card.Body>
              <Card.Title>Nakit Desteği Nedir?</Card.Title>
              <Card.Text>
                <p>Afetin sosyal ve ekonomik hayata olumsuz etkilerini azaltmak amacıyla, afetzedelerin her türlü ihtiyacını karşılayabilmesi için yapılacak olan nakit yardımlarda kullanılacak olan destek türüdür.</p>
                <p>Bağış tutarı 100 TL' dir.</p>
              </Card.Text>
            </Card.Body>
           
            <Card.Body>
              <Button variant="outline-success"><span className="mx-2">Bağış Kutusuna Ekle</span><FaBoxOpen size="3em"/></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-md-6, col-sm-12, col-lg-6">
        <Card className="shadow border-secondary mt-3 rounded" style={{ }}>
          <Card.Header><h4>Temel Gıda Paketi</h4></Card.Header>
            <Image variant="top" src={gida} fluid/>
            <Card.Body>
              <Card.Title>Temel Gıda Paketi Nedir?</Card.Title>
              <Card.Text>
              <p> Pirinç, bulgur, salça, ayçiçek yağı, toz şeker, ve daha birçok bakliyat ürünleri ile kahvaltılık ürünler içeren paket, afetzedelerin temel gıda ihtiyaçlarını karşılamayı hedeflemektedir.</p>
                <p>Bağış tutarı 400 TL' dir.</p>
              </Card.Text>
            </Card.Body>
           
            <Card.Body>
            <Button variant="outline-success"><span className="mx-2">Bağış Kutusuna Ekle</span><FaBoxOpen size="3em"/></Button>
            </Card.Body>
          </Card></Col>
      </Row>
      <Row>
        <Col className="col-md-6, col-sm-12, col-lg-6">
        <Card className="shadow border-secondary mt-3 rounded" style={{ }}>
          <Card.Header><h4>Giyim Paketi</h4></Card.Header>
            <Image variant="top" src={giyim} fluid/>
            <Card.Body>
              <Card.Title>Giyim Paketi Nedir?</Card.Title>
              <Card.Text>
              <p>Mevsim şartlarına uygun olarak, bir çift ayakkabı, bir takım dış giyim, bir takım iç giyim ürünü içeren paket, afetzedelerin temel giyim ihtiyacını karşılamayı hedeflemektedir.</p>
                <p>Bağış tutarı 500 TL' dir.</p>
              </Card.Text>
            </Card.Body>
           
            <Card.Body>
            <Button variant="outline-success"><span className="mx-2">Bağış Kutusuna Ekle</span><FaBoxOpen size="3em"/></Button>
            </Card.Body>
          </Card></Col>
        <Col className="col-md-6, col-sm-12, col-lg-6">
        <Card className="shadow border-secondary mt-3 rounded" style={{ }}>
          <Card.Header><h4>Temizlik Ürünleri</h4></Card.Header>
            <Image variant="top" src={temizlik} fluid/>
            <Card.Body>
              <Card.Title> Temizlik Ürünleri Nelerdir?</Card.Title>
              <Card.Text>
              <p>Sabun, şampuan, bulaşık deterjanı, çamaşır deterjanı, çamaşır suyu, yüzey temizleyiciler gibi çeşitli temizlik malzemeleri içeren paket, afetzedelerin temel temizlik ihtiyacını karşılamayı hedeflemektedir.</p>
                <p>Bağış tutarı 300 TL' dir.</p>
              </Card.Text>
            </Card.Body>
           
            <Card.Body>
            <Button variant="outline-success"><span className="mx-2">Bağış Kutusuna Ekle</span><FaBoxOpen size="3em"/></Button>
            </Card.Body>
          </Card></Col>
      </Row>
    </div>
  );
}

export default Production;
