import React, { useEffect, useState } from "react";
import { Container, Table, Dropdown, Button } from "react-bootstrap";
import SubmitUser from "../Components/SubmitUser";
import { ToastContainer, toast } from "react-toastify";

const UserScreen = () => {
  const [users, setUsers] = useState([]);

  //delete user function

  const deleteUser = async (id) => {
    try {
      const deleteUser = await fetch("http://localhost:5000/users/" + id, {
        method: "DELETE",
      });

      setUsers(users.filter((users) => users.user_id !== id));
      toast.error("Kullanıcı kaydı silindi!");
    } catch (e) {
      console.error(e.message);
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

  console.log(users);

  useEffect(() => {
    getUsers();
  }, []);

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
    </div>
  );
};

export default UserScreen;
