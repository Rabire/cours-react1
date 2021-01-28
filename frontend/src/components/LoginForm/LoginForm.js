import React, { useState } from "react";

import {
  StyledForm,
  Input,
  InputDiv,
  Text,
  FormContainer,
  Button,
} from "./LoginForm.style";
import axios from "axios";

export const LoginForm = () => {
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);

  const login = () => {
    axios
      .post("http://localhost:3000/users/login", credentials)
      .then(() => {
        console.log("success");
      })
      .catch(console.log);
  };

  const credentials = { email, password };

  return (
    <FormContainer>
      <StyledForm className="StyledForm">
        <InputDiv>
          <Text>Email :</Text>
          <Input
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
        </InputDiv>

        <InputDiv>
          <Text>Password :</Text>
          <Input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </InputDiv>

        <Button type="button" value="Se connecter" onClick={login} />
      </StyledForm>
    </FormContainer>
  );
};
