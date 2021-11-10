import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import nakit from "../img/nakit.jpg";
import gida from "../img/gida.jpg";
import temizlik from "../img/temizlik.jpg";
import giyim from "../img/giyim.jpg";
import { FaBoxOpen } from "react-icons/fa";

function Product() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/donationtypes");
      const jsonData = await response.json();
      setProducts(jsonData);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Row>
        <Col className="col-md-6, col-sm-12, col-lg-6">
          <Card className="shadow border-secondary mt-3 rounded" style={{}}>
            <Card.Header>
              <h4>
                {products
                  .filter((x) => x.donation_type_id === 1)
                  .map((filtered) => (
                    <h4 key={filtered.donation_type_id}>
                     
                      {filtered.donation_type}
                    </h4>
                  ))}
              </h4>
            </Card.Header>
            <Image variant="top" src={nakit} fluid />
            <Card.Body>
              <Card.Title>Nakit Desteği Nedir?</Card.Title>
              <Card.Text>
                <p>
                  Afetin sosyal ve ekonomik hayata olumsuz etkilerini azaltmak
                  amacıyla, afetzedelerin her türlü ihtiyacını karşılayabilmesi
                  için yapılacak olan nakit yardımlarda kullanılacak olan destek
                  türüdür.
                </p>
                <p>Bağış tutarı 100 TL' dir.</p>
              </Card.Text>
            </Card.Body>

            <Card.Body>
            <Button variant="outline-success" href="https://sandbox.iyzi.link/RkU">
                <span className="mx-2">Bağış Yap</span>
                <FaBoxOpen size="3em" />
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-md-6, col-sm-12, col-lg-6">
          <Card className="shadow border-secondary mt-3 rounded" style={{}}>
            <Card.Header>
            {products
                  .filter((x) => x.donation_type_id === 2)
                  .map((filtered) => (
                    <h4 key={filtered.donation_type_id}>
                      
                      {filtered.donation_type}
                    </h4>
                  ))}
            </Card.Header>
            <Image variant="top" src={gida} fluid />
            <Card.Body>
              <Card.Title>Temel Gıda Paketi Nedir?</Card.Title>
              <Card.Text>
                <p>
                  
                  Pirinç, bulgur, salça, ayçiçek yağı, toz şeker, ve daha birçok
                  bakliyat ürünleri ile kahvaltılık ürünler içeren paket,
                  afetzedelerin temel gıda ihtiyaçlarını karşılamayı
                  hedeflemektedir.
                </p>
                <p>Bağış tutarı 400 TL' dir.</p>
              </Card.Text>
            </Card.Body>

            <Card.Body>
              <Button variant="outline-success" href="https://sandbox.iyzi.link/Rjk">
                <span className="mx-2">Bağış Yap</span>
                <FaBoxOpen size="3em" />
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-6, col-sm-12, col-lg-6">
          <Card className="shadow border-secondary mt-3 rounded" style={{}}>
            <Card.Header>
            {products
                  .filter((x) => x.donation_type_id === 3)
                  .map((filtered) => (
                    <h4 key={filtered.donation_type_id}>
                      
                      {filtered.donation_type}
                    </h4>
                  ))}
            </Card.Header>
            <Image variant="top" src={giyim} fluid />
            <Card.Body>
              <Card.Title>Giyim Paketi Nedir?</Card.Title>
              <Card.Text>
                <p>
                  Mevsim şartlarına uygun olarak, bir çift ayakkabı, bir takım
                  dış giyim, bir takım iç giyim ürünü içeren paket,
                  afetzedelerin temel giyim ihtiyacını karşılamayı
                  hedeflemektedir.
                </p>
                <p>Bağış tutarı 500 TL' dir.</p>
              </Card.Text>
            </Card.Body>

            <Card.Body>
            <Button variant="outline-success" href="https://sandbox.iyzi.link/RkY">
                <span className="mx-2">Bağış Yap</span>
                <FaBoxOpen size="3em" />
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-md-6, col-sm-12, col-lg-6">
          <Card className="shadow border-secondary mt-3 rounded" style={{}}>
            <Card.Header>
            {products
                  .filter((x) => x.donation_type_id === 4)
                  .map((filtered) => (
                    <h4 key={filtered.donation_type_id}>
                      
                      {filtered.donation_type}
                    </h4>
                  ))}
            </Card.Header>
            <Image variant="top" src={temizlik} fluid />
            <Card.Body>
              <Card.Title> Temizlik Ürünleri Nelerdir?</Card.Title>
              <Card.Text>
                <p>
                  Sabun, şampuan, bulaşık deterjanı, çamaşır deterjanı, çamaşır
                  suyu, yüzey temizleyiciler gibi çeşitli temizlik malzemeleri
                  içeren paket, afetzedelerin temel temizlik ihtiyacını
                  karşılamayı hedeflemektedir.
                </p>
                <p>Bağış tutarı 300 TL' dir.</p>
              </Card.Text>
            </Card.Body>

            <Card.Body>
            <Button variant="outline-success" href="https://sandbox.iyzi.link/Rjo" >
                <span className="mx-2">Bağış Yap</span>
                <FaBoxOpen size="3em" />
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Product;
