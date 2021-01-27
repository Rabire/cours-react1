import styled from "styled-components";
import { color } from "./../../theme";

export const Navbar = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 10px 0;
  justify-content: space-around;
  align-items: center;
  background-color: ${color.darkBlue};
  width: 100%;
  z-index: 2;
`;

export const AnchorContainer = styled.div`
  @media (max-width: 1240px) {
    display: none;
  }
`;

export const AnchorText = styled.a`
  border-bottom: 2px solid;
  padding-bottom: 2px;
  border-color: ${(props) =>
    props.isSelected ? color.magenta : color.darkBlue};
  text-decoration-color: ${color.darkBlue};
  margin-left: 30px;
  &:hover {
    color: ${color.magenta};
    border-bottom: 2px solid;
    border-color: ${color.magenta};
  }
`;
