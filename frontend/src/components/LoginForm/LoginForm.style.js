import styled from "styled-components";
import { color } from "./../../theme";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 10% 50px 10%;
  padding-top: 20px;
`;

export const Input = styled.input`
  border-radius: 20px;
  border: 2px solid black;
  border-color: black;
  height: 40px;
  width: 100%;
  font-size: 20px;
  margin-bottom: 10px;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`;

export const InputDiv = styled.div`
  width: 100%;
`;

export const StyledForm = styled.form`
  width: 70%;
  max-width: 400px;
`;

export const Text = styled.p`
  text-align: left;
  margin-bottom: 10px;
  margin-left: 15px;
`;

export const Button = styled.input`
  margin-top: 20px;
  width: 100%;
  height: 10%;
  border: 2px solid black;
  border-radius: 20px;
  &:focus {
    outline: none;
  }
`;
