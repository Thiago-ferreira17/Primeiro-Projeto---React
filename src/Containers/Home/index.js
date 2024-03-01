import React, { useState, useRef } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";

import People from "../../Assets/people.svg";

import Arrow from "../../Assets/arrow.svg";

import H1 from "../../Components/Titles";

import ContainerItens from "../../Components/ContainerItens";

import { Container, Image, InputLabel, Input, Button } from "./style";

const App = () => {
  // const users = [];

  const [users, setUsers] = useState([]);
  const history = useHistory();

  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    console.log(newUser);
    setUsers([...users, newUser]);

    history.push("/usuarios");
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />

      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar
          <img alt="seta" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
