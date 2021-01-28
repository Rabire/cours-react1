import React, { useState } from "react";

import {
  StyledForm,
  Input,
  InputDiv,
  Text,
  FormContainer,
  Button,
} from "./Form.style";

import { createUser } from "../../utils/rest";

export const Form = () => {
  const [lastName, setLastName] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [email, setEmail] = useState(null);

  function addUser(newUser) {
    createUser(newUser)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Oé", err);
      });
  }

  const userObject = { firstname: firstName, lastname: lastName, email: email };

  return (
    <FormContainer>
      <StyledForm className="StyledForm">
        <InputDiv>
          <Text>Nom : </Text>
          <Input
            type="text"
            onChange={(event) => setLastName(event.target.value)}
          />
        </InputDiv>
        <InputDiv>
          <Text> Prénom :</Text>
          <Input
            type="text"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </InputDiv>
        <InputDiv>
          <Text>Email :</Text>
          <Input
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
        </InputDiv>
        <Button
          type="button"
          value="Envoyer"
          onClick={() => addUser(userObject)}
        />
      </StyledForm>
    </FormContainer>
  );
};
