/* eslint-disable no-sequences */
import React, { useEffect, useState } from "react";
import { Container, Table, Dropdown, Button, Modal, Form } from "react-bootstrap";
import SubmitUser from "../Components/SubmitUser";
import { ToastContainer, toast } from "react-toastify";

const UserScreen = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const calluser = (x) => {
    users.filter(z => z.user_id === x).map((item, index) => (
      setEditName(item.user_name),
      setEditSurname(item.user_surname),
      setEditMail(item.user_email),
      setEditUserName(item.user_username),
      setEditPass(item.user_pass),
      setEditID(item.user_id)
    ))
    handleShow();
  }

  const putUser = async (id) => {
    if(id > 0){
      let userx = {
        user_new_name: editName,
        user_new_surname: editSurname,
        user_new_pass: editPass,
        user_new_mail: editMail,
        user_new_username: editUserName
    }
      
      try {
        const putUser = await fetch("http://localhost:5000/users/" + id, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userx),
        });
        toast.success("Kullanıcı başarıyla güncellendi");
        console.log(putUser);
      } catch (e) {
        toast.error("Kullanıcı güncellenemedi!");
      }
    }
    handleClose();
  }

  //Kullanıcı Bilgileri düzenlemek için oluşturulan state'ler
  const [editID, setEditID] = useState(0);
  const [editName, setEditName] = useState("");
  const [editSurname, setEditSurname] = useState("");
  const [editMail, setEditMail] = useState("");
  const [editUserName, setEditUserName] = useState("");
  const [editPass, setEditPass] = useState("");

  //delete user function

  const deleteUser = async (id) => {
    try {
      const deleteUser = await fetch("http://localhost:5000/users/" + id, {
        method: "DELETE",
      });

      setUsers(users.filter((users) => users.user_id !== id));
      toast.error("Kullanıcı kaydı silindi!");
    } catch (e) {
      toast.error("Silme işlemi başarısız!");
    }
  };

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/users");
      const jsonData = await response.json();

      setUsers(jsonData);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    getUsers(); 
  }, [show]);

  return (
    <div>
      <Container>
        <SubmitUser />
      </Container>

      <Dropdown.Divider />

      <Container className="py-5">
        <h3>Kullanıcılar</h3>
        <Table className="table table-secondary table-hover" responsive="md">
          <thead>
            <tr>
              <th scope="col">Sıra No</th>
              <th scope="col">Personel Adı</th>
              <th scope="col">Personel Soyadı</th>
              <th scope="col">Kullanıcı Adı</th>
              <th scope="col">E-Posta Adresi</th>
              <th scope="col">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.user_id}>
                <td>{user.user_id}</td>
                <td>{user.user_name}</td>
                <td>{user.user_surname}</td>
                <td>{user.user_username}</td>
                <td>{user.user_email}</td>
                <td>
                  <Button className="mx-2" variant="outline-info"  onClick={() => calluser(user.user_id)}>
                   Düzenle
                  </Button>
                  <Button
                    variant="outline-danger"
                    onClick={() => deleteUser(user.user_id)}
                  >
                    Sil
                  </Button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ToastContainer newestOnTop closeOnClick />
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kullanıcı Bilgilerini Güncelle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Personel Adı</Form.Label>
            <Form.Control type="text" onChange={r => setEditName(r.target.value)} defaultValue={editName} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Personel Soyadı</Form.Label>
            <Form.Control type="text" onChange={r => setEditSurname(r.target.value)} defaultValue={editSurname} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>E-Posta Adresi</Form.Label>
            <Form.Control type="email" onChange={r => setEditMail(r.target.value)} defaultValue={editMail} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Kullanıcı Adı</Form.Label>
            <Form.Control type="text" onChange={r => setEditUserName(r.target.value)} defaultValue={editUserName} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Şifre</Form.Label>
            <Form.Control type="password" onChange={r => setEditPass(r.target.value)} defaultValue={editPass} />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Vazgeç
          </Button>
          <Button variant="success"  onClick={() => putUser(editID)}>
            Değişiklikleri Kaydet
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default UserScreen;
