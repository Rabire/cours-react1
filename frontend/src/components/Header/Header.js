import React, { useState } from "react";
import { Navbar, AnchorContainer, AnchorText } from "./Header.styles";

export const anchorData = [
  { title: "HOME", link: "/home" },
  { title: "PROMO", link: "/promo" },
  { title: "LOGIN", link: "/login" },
];

export const Header = () => {
  const [buttonSelected, setButtonSelected] = useState("OFFRE");

  return (
    <>
      <Navbar>
        <div>
          <p>LOGO</p>
        </div>
        <AnchorContainer>
          {anchorData.map((element, index) => (
            <AnchorText
              href={element.link}
              key={index}
              onClick={() => setButtonSelected(element.title)}
              isSelected={buttonSelected === element.title}
            >
              {element.title}
            </AnchorText>
          ))}
        </AnchorContainer>
      </Navbar>
    </>
  );
};
