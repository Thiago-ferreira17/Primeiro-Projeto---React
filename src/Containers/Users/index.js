import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";

import Avatar from "../../Assets/avatar.svg";

import Arrow from "../../Assets/arrow.svg";

import Trash from "../../Assets/trash.svg";

import H1 from "../../Components/Titles";

import ContainerItens from "../../Components/ContainerItens";

import { Container, Image,  Button, User } from "./style";

const Users = () => {
  // const users = [];

  const [users, setUsers] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }

    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);

    const nemUsers = users.filter((user) => user.id !== userId);

    setUsers(nemUsers);
  }

  function goBackPage() {
    history.push("/");
  }
  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />

      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name} </p> <p> {user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage}>
          <img alt="seta" src={Arrow} /> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;
