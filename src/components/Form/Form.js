import React, { useState } from "react";

import {
  StyledForm,
  Input,
  InputDiv,
  Text,
  FormContainer,
  Button,
} from "./Form.style";

export const Form = () => {
  const [lastName, setLastName] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [email, setEmail] = useState(null);

  console.log(lastName, firstName, email);

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
        <Button type="button" value="Envoyer" />
      </StyledForm>
    </FormContainer>
  );
};
