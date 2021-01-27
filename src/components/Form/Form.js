import React from "react";
import "./Form.css";

export const Form = () => {
  return (
    <form className="form">
      <label>
        Nom :
        <input type="text" />
      </label>
      <label>
        Prénom :
        <input type="text" />
      </label>
      <label>
        Email :
        <input type="text" />
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
};
