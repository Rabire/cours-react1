import React, { useState } from "react";

import {
  StyledForm,
  Input,
  InputDiv,
  Text,
  FormContainer,
  Button,
} from "./LoginForm.style";

// import { createUser } from "../../utils/rest";

export const LoginForm = () => {
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);

  //   function addUser(newUser) {
  //     createUser(newUser)
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log("Oé", err);
  //       });
  //   }

  const login = () => {
    console.log("make API call");
    console.log({ userObject });
  };

  const userObject = { email, password };

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
            type="text"
            onChange={(event) => setPassword(event.target.value)}
          />
        </InputDiv>

        <Button
          type="button"
          value="Envoyer"
          onClick={() => login(userObject)}
        />
      </StyledForm>
    </FormContainer>
  );
};
