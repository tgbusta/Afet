import React, { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import { Carousel, Container, Row, Col, Card, Table } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import slider2 from "../img/pexels-ron-lach-9169658.jpg";
import slider1 from "../img/afetyardim1.jpg";
import slider3 from "../img/basvuru.JPG";
import Production from "../Components/Product";
import { toast,ToastContainer } from "react-toastify";
import TokenService from "../Services/TokenService";
import Navi from "../Components/Navi";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Welcome = () => {
const isAuth = TokenService.getToken();
  const timeDifference = (date1) => {
    let b = date1.split(/\D+/);
    let dateE= new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
    let difference = new Date().getTime() - dateE.getTime();

    let daysDifference = Math.floor(difference/1000/60/60/24);
    difference -= daysDifference*1000*60*60*24

    let hoursDifference = Math.floor(difference/1000/60/60);
    difference -= hoursDifference*1000*60*60

    let minutesDifference = Math.floor(difference/1000/60);
    difference -= minutesDifference*1000*60

    let secondsDifference = Math.floor(difference/1000);
    if(daysDifference>0)
    return true;
    if(hoursDifference>1)
    return true;
    if(minutesDifference>10)
    return true;
    return false;
}

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/checkUser/"+ code);
      const jsonData = await response.json();
      timeDifference(jsonData.user_exp_time);
      if(jsonData){
        if(timeDifference(jsonData.user_exp_time))
        {
          toast.warn("Doğrulama linkinin süresi geçmiştir.")
          return;
        }
        if(jsonData.user_authcode_valid){
          toast.warn("Doğrulama linki daha öncesinde kullanılmıştır.")
          return;
        }

            const response = await fetch("http://localhost:5000/validateUser/"+ jsonData.user_id);
            const respData = await response.json();
            respData.status ? toast.success(respData.message) : toast.warn("hata");
      }
     
      
    } catch (e) {
      console.error(e.message);
    }
  };

  let query = useQuery();
  let code ="";
 

   useEffect(()=>{
    if(query && query.get("code")){
      code=query.get("code");
      getUsers();
     }
   },[]);

  

  
  

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
        <ToastContainer newestOnTop closeOnClick />
      </Container>
    </div>
  );
};

export default Welcome;
